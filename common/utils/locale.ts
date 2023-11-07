import { DEFAULT_LOCALE, LOCALES } from "../consts"
import { useIncludes } from "../composables"
import { Locale } from "../enums"

export function getLocale(): Locale {
    try {
        let systemLocale: string = (
            new Intl
                .NumberFormat()
                .resolvedOptions()
                .locale
                .slice(0, DEFAULT_LOCALE.length)
        )

        return useIncludes(LOCALES, systemLocale)
            ? systemLocale as Locale
            : DEFAULT_LOCALE
    } catch {
        return DEFAULT_LOCALE
    }
}
