import type { Currency, Locale } from "$lib/enums"
import type { IUser } from "$schema/api"

export type ISession = {
    currency: Currency
    locale: Locale
    user?: IUser
}
