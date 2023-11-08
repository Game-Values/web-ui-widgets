export function pxToRem(val: number | string): string {
    if (isString(val))
        return (parseInt(val as string, 10) * 0.1).toFixed(1) + "rem"

    return (val as number * 0.1).toFixed(1) + "rem"
}
