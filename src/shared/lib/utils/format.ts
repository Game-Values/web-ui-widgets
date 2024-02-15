export function formatNum(num: number): string {
    // Because US uses comma to separate big numbers
    return num
        .toLocaleString("en-US")
        .replaceAll(",", " ")
}

export function formatPrice(num: number, currency: string /* todo: sign type */): string {
    return `${formatNum(num)} ${currency}`
}
