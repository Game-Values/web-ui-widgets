import { browser } from "$app/environment"

/**
 * rem = px / common font
 */
export function pxToRem(px: number): number {
    let computedStyle: CSSStyleDeclaration = (
        browser
            ? getComputedStyle(document.documentElement)
            : Object.create(null)
    )

    return px / parseInt(computedStyle.fontSize, 10)
}
