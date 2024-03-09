import type { DialogName } from "$lib"
import type { Page } from "@sveltejs/kit"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { replaceState } from "$app/navigation"
import { page } from "$app/stores"

type IDialog = {
    closeDialog(): void
    isDialogOpen: Readable<(dialog: DialogName) => boolean>
    openDialog(dialog: DialogName): void
}

let isDialogOpen: Readable<(dialog: DialogName) => boolean> = (
    derived(page, ($page: Page): (dialog: DialogName) => boolean => (
        (dialog: DialogName): boolean => $page.state.dialog === dialog
    ))
)

function closeDialog(): void {
    replaceState("", {
        dialog: undefined,
    })
}

function openDialog(dialog: DialogName): void {
    replaceState("", {
        dialog,
    })
}

export function useDialog(): IDialog {
    return {
        closeDialog,
        isDialogOpen,
        openDialog,
    }
}
