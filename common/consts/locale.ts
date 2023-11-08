import { useValues } from "../composables"
import { Locale, LocaleISO } from "../enums"

export const DEFAULT_LOCALE: Locale = Locale.EN

export const DEFAULT_LOCALE_ISO: string = LocaleISO.EN

export const LOCALES: Locale[] = useValues(Locale)
