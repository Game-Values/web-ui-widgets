import type { IDialogOptions, IUseDialog } from "$model/dialog"

import { derived, readable } from "svelte/store"

import { DialogName } from "$lib/enums"
import { cache } from "$lib/helpers"
import { useState } from "$model/state"

function useDialog(dialogName: DialogName): Pick<IUseDialog, "close" | "open">

function useDialog(options: IDialogOptions): IUseDialog

function useDialog(dialogNameOrOptions: DialogName | IDialogOptions): IUseDialog {
    let { state, update } = useState()

    let dialog: Partial<IUseDialog> = {
        close: (): void => update({ dialog: undefined }),
    }

    if (Object.values(DialogName).includes(dialogNameOrOptions as DialogName)) {
        let dialogName: DialogName = dialogNameOrOptions as DialogName
        dialog.open = () => update({ dialog: dialogName })
    } else {
        let dialogOptions: IDialogOptions = dialogNameOrOptions as IDialogOptions

        if (!cache.has(dialogOptions.name))
            cache.set(dialogOptions.name, {
                context: readable(dialogOptions),
                opened: derived(state, ($state: App.PageState): boolean => (
                    $state.dialog === dialogOptions.name
                )),
            })

        Object.assign(dialog, cache.get(dialogOptions.name), {
            open: () => update({ dialog: dialogOptions.name }),
        })
    }

    return dialog as IUseDialog
}

export {
    useDialog,
}
