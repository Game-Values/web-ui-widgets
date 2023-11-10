export function pxToRem(
    val: number | string,
    withPostfix: boolean = true,
): number | string {
    let rem: string = ""

    if (isString(val))
        rem += (parseInt(val as string, 10) * 0.1).toFixed(1)
    else
        rem += (val as number * 0.1).toFixed(1)

    if (withPostfix)
        return rem + "rem"

    return Number(rem)
}

export function remToPx(
    val: number | string,
    withPostfix: boolean = true,
): number | string {
    let px: string = ""

    if (isString(val))
        px += (parseFloat(val as string) * 10).toFixed(1)
    else
        px += (val as number * 10).toFixed(1)

    if (withPostfix)
        return px + "px"

    return Number(px)
}
