import { browser } from "$app/environment"


/**
 * rem = px / common font
 */
export function pxToRem(px: number): number {
    let computedStyle: CSSStyleDeclaration = Object.create(null)
    if (browser)
        computedStyle = getComputedStyle(document.documentElement)

    return px / parseInt(computedStyle.fontSize || "16px", 10)
}
