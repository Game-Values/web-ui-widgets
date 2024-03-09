import { onDestroy, onMount } from "svelte"

import { useState } from "$model"

type IUseBackground = {
    setBackground(): void
    unsetBackground(): void
}

export function useBackground(background: App.PageState["background"]): IUseBackground {
    let { updateState } = useState()

    let use: IUseBackground = {
        setBackground: (): void => updateState({ background }),

        unsetBackground: (): void => updateState({ background: undefined }),
    }

    onMount(use.setBackground)

    onDestroy(use.unsetBackground)

    return use
}
