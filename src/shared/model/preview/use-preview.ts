import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { useState } from "$model/state"

type IUsePreview = {
    set(): void
    src: Readable<string | undefined>
    unset(): void
}

let { state, update } = useState()

let previewSrc: Readable<string | undefined> = derived(state, (
    ($state: App.PageState): string | undefined => $state.preview
))

export function setPreview(preview: string): void {
    update({ preview })
}

export function unsetPreview(): void {
    update({ preview: undefined })
}

export function usePreview(preview: string): IUsePreview {
    return {
        set: (): void => setPreview(preview),
        src: previewSrc,
        unset: unsetPreview,
    }
}
