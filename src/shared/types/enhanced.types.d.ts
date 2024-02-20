import type { ICallableLazy } from "$types/helpers.types"

export type IEnhanced = {
    img: IEnhancedImage
    sources: IEnhancedSources
}

export type IEnhancedImage = {
    h: number
    src: string
    w: number
}

export type IEnhancedImages = Record<IEnhancedImageSize, Record<string, ICallableLazy<IEnhanced>>>

export type IEnhancedImageSize = "lg" | "md" | "sm" | "xs"

export type IEnhancedImageSrc = `${"icons" | "images"}/${string}.${"png" | "svg"}`

type IEnhancedSources = {
    webp: string
}
