import type { DialogName } from "$lib/enums"
import type { Readable } from "svelte/store"

export type IDialogOptions = {
    name: DialogName
    title?: string
    width?: string
}

export type IUseDialog = {
    close(): void
    context: Readable<IDialogOptions>
    open(): void
    opened: Readable<boolean>
}
