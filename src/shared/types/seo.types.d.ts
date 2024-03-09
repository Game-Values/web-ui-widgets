import type { Locale } from "$lib/enums"

export type ISeo = {
    canonicalUrl?: string
    description?: string
    image?: string
    locale?: Locale
    title: string
}
