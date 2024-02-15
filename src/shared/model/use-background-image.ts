import { usePageState } from "$model"

type IUseBackgroundImage = {
    setBackgroundImage(): void
    unsetBackgroundImage(): void
}

export function useBackgroundImage(
    src: string,
    size?: { height?: `${string}rem`, width?: `${string}rem` },
): IUseBackgroundImage {
    let { updatePageState } = usePageState()

    return {
        setBackgroundImage: (): void => (
            updatePageState({ backgroundImage: src, backgroundImageSize: size })
        ),

        unsetBackgroundImage: (): void => (
            updatePageState({ backgroundImage: undefined, backgroundImageSize: undefined })
        ),
    }
}
