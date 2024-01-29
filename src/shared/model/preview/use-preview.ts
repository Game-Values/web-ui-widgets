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

export function usePreview(preview: string): IUsePreview {
    return {
        set: (): void => update({ preview }),
        src: previewSrc,
        unset: (): void => update({ preview: undefined }),
    }
}
