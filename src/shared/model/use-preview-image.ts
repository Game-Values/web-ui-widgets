import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { useState } from "$model"

type IUsePreview = {
    set(): void
    src: Readable<string | undefined>
    unset(): void
}

let { state, update } = useState()

let previewSrc: Readable<string | undefined> = derived(state, (
    ($state: App.PageState): string | undefined => $state.preview
))

type IUsePreviewImage = {

}

export function usePreviewImage(): IUsePreviewImage {
    return {

    }
}
