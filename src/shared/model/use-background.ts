import { useState } from "$model"

type IUseBackground = {
    setBackground(): void
    unsetBackground(): void
}

export function useBackground(background: App.PageState["background"]): IUseBackground {
    let { updateState } = useState()

    return {
        setBackground: (): void => updateState({ background }),

        unsetBackground: (): void => updateState({ background: undefined }),
    }
}
