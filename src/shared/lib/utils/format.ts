import type { Currency } from "$lib/enums"
import type { IValueOfEnum } from "$types"

import { get } from "svelte/store"

import { CurrencySign } from "$lib/enums"
import { useSession } from "$model"

export function formatNum(num: number): string {
    // Because US uses comma to separate big numbers
    return num
        .toLocaleString("en-US")
        .replaceAll(",", " ")
}

export function formatPrice(
    num: number,
    currency: IValueOfEnum<Currency> = get(useSession().currency),
): string {
    return `${formatNum(num)} ${CurrencySign[currency]}`
}
