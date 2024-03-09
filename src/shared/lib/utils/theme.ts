import { onClient } from "$lib/helpers"

/**
 * rem = px / common font
 */
export function pxToRem(px: number): number {
    let computedStyle: CSSStyleDeclaration = Object.create(null)

    onClient((): void => {
        computedStyle = getComputedStyle(document.documentElement)
    })

    return px / parseInt(computedStyle.fontSize || "16px", 10)
}
