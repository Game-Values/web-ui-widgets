import { get } from "lodash-es"

import { CURRENCY_SIGN, Currency } from "~/shared/model"

export function formatPrice(price: number, currency: Currency): string {
    let currencySign: string = get(CURRENCY_SIGN, currency)

    return `${price} ${currencySign}`
}
