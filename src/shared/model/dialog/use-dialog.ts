import type { IDialogOptions, IUseDialog } from "$model/dialog"

import { derived, readable } from "svelte/store"

import { DialogName } from "$lib/enums"
import { cache } from "$lib/helpers"
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

        if (!cache.has(dialogOptions.name))
            cache.set(dialogOptions.name, {
                context: readable(dialogOptions),
                opened: derived(state, ($state: App.PageState): boolean => (
                    $state.dialog === DialogName[dialogOptions.name]
                )),
            })

        Object.assign(dialog, cache.get(dialogOptions.name), {
            open: () => update({ dialog: DialogName[dialogOptions.name] }),
        })
    }

    return dialog as IUseDialog
}

export {
    useDialog,
}
