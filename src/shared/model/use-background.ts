import { usePageState } from "$model"

type IUseBackground = {
    setBackground(): void
    unsetBackground(): void
}

export function useBackground(background: App.PageState["background"]): IUseBackground {
    let { updatePageState } = usePageState()

    return {
        setBackground: (): void => (
            updatePageState({ background })
        ),

        unsetBackground: (): void => (
            updatePageState({ background: undefined })
        ),
    }
}
