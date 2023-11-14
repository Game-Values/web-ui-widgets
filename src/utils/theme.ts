export function pxToRem(val: number | string): string {
    let rem: string = ""

    if (isString(val))
        rem += (parseInt(val as string, 10) * 0.1).toFixed(1)
    else
        rem += (val as number * 0.1).toFixed(1)

    return rem + "rem"
}

export function remToPx(val: number | string): string {
    let px: string = ""

    if (isString(val))
        px += (parseFloat(val as string) * 10).toFixed(1)
    else
        px += (val as number * 10).toFixed(1)

    return px + "px"
}
