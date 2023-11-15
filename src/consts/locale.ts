import type { LocaleConfig } from "vexip-ui"
import type { Callable } from "~/types"

import { enUSLocale, deDELocale } from "vexip-ui"

import { LocaleISO } from "~/enums"

export const VEXIP_LOCALE: Record<LocaleISO, Callable<LocaleConfig>> = {
    [LocaleISO.DE]: (): LocaleConfig => deDELocale(),
    [LocaleISO.EN]: (): LocaleConfig => enUSLocale(),
}
