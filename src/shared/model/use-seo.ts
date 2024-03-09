import type { ISeo } from "$types"

import { onDestroy } from "svelte"
import { get } from "svelte/store"

import { useState } from "$model"

export function useSeo(seo: ISeo): ISeo | undefined {
    let { state, updateState } = useState()

    updateState({ seo })

    onDestroy((): void => updateState({ seo: undefined }))

    return get(state).seo
}
