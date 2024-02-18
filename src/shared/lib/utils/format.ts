import type { Currency } from "$lib/enums"
import type { IValueOfEnum } from "$types"

import { CurrencySign } from "$lib/enums"

export function formatNum(num: number): string {
    // Because US uses comma to separate big numbers
    return num
        .toLocaleString("en-US")
        .replaceAll(",", " ")
}

export function formatPrice(num: number, currency: IValueOfEnum<Currency>): string {
    return `${formatNum(num)} ${CurrencySign[currency]}`
}
