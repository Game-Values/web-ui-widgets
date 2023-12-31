import type { Locale } from "~/enums"
import type { SeoOgLocale, SeoRaw } from "~/types"

import { LOCALES } from "~/enums"

export class Seo implements SeoRaw {
    @Expose()
    declare public description: string

    @Expose()
    declare public image: string

    @Expose()
    declare public title: string

    public get locale(): Locale {
        return getRef(useI18n(), "locale")
    }

    public get locales(): SeoOgLocale[] {
        let localesDiff: Locale[] = useDifference<Locale>(LOCALES, [
            this.locale,
        ])

        return useMap(localesDiff, (locale: Locale): SeoOgLocale => (
            {
                content: locale,
                property: "og:locale:alternate",
            }
        ))
    }
}
