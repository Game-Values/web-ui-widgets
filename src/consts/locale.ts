import type { Callable } from "~/types"
import type { LocaleConfig } from "vexip-ui"

import { deDELocale, enUSLocale } from "vexip-ui"

import { LocaleISO } from "~/enums"

export const VEXIP_LOCALE: Record<LocaleISO, Callable<LocaleConfig>> = {
    [LocaleISO.DE]: (): LocaleConfig => deDELocale(),
    [LocaleISO.EN]: (): LocaleConfig => enUSLocale(),
}
