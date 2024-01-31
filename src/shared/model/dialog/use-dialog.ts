import type { IDialogOptions, IUseDialog } from "$model/dialog"

import { derived, readable } from "svelte/store"

import { DialogName } from "$lib/enums"
import { useState } from "$model/state"

function useDialog(
    dialogName: keyof typeof DialogName,
): Pick<IUseDialog, "close" | "open">

function useDialog(
    options: IDialogOptions,
): IUseDialog

function useDialog(
    dialogNameOrOptions: IDialogOptions | keyof typeof DialogName,
): IUseDialog {
    let { state, update } = useState()

    let dialog: Partial<IUseDialog> = {
        close: (): void => update({ dialog: undefined }),
    }

    if (Object.keys(DialogName).includes(dialogNameOrOptions as string)) {
        let dialogName: DialogName = DialogName[dialogNameOrOptions as keyof typeof DialogName]
        dialog.open = () => update({ dialog: dialogName })
    } else {
        let dialogOptions: IDialogOptions = dialogNameOrOptions as IDialogOptions
        Object.assign(dialog, {
            context: readable(dialogOptions),
            open: () => update({ dialog: DialogName[dialogOptions.name] }),
            opened: derived(state, ($state: App.PageState): boolean => (
                $state.dialog === DialogName[dialogOptions.name]
            )),
        })
    }

    return dialog as IUseDialog
}

export {
    useDialog,
}
