import type { Locale } from "~/enums"

export interface SeoOgLocale {
    content: Locale
    property: string
}

export interface SeoRaw {
    description: string
    image: string
    title: string
}
