import { useValues } from "../composables"
import { Locale } from "../enums"

export const DEFAULT_LOCALE: Locale = Locale.EN

export const LOCALES: Locale[] = useValues(Locale)
