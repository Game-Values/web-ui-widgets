import type { Locale } from "$lib/enums"
import type { IUser } from "$schema/api"

export type ISession = {
    locale: Locale
    user?: IUser
}
