export function pxToRem(val: number | string): string {
    let rem: string = ""

    if (isString(val))
        rem += (parseInt(val , 10) * 0.1).toFixed(1)
    else
        rem += (val  * 0.1).toFixed(1)

    return rem + "rem"
}

export function remToPx(val: number | string): string {
    let px: string = ""

    if (isString(val))
        px += (parseFloat(val ) * 10).toFixed(1)
    else
        px += (val  * 10).toFixed(1)

    return px + "px"
}
