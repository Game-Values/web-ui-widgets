import { DEFAULT_LOCALE, LOCALES } from "../consts"
import { Locale } from "../enums"

export function getLocale(): Locale {
    try {
        let systemLocale: Locale = (
            new Intl
                .NumberFormat()
                .resolvedOptions()
                .locale
                .slice(0, DEFAULT_LOCALE.length)
        ) as Locale

        return LOCALES.includes(systemLocale)
            ? systemLocale
            : DEFAULT_LOCALE
    } catch {
        return DEFAULT_LOCALE
    }
}
