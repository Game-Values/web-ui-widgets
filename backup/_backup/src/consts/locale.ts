import type { Callable } from "~/types"
import type { LocaleConfig } from "vexip-chat-send-hub-message"

import { deDELocale, enUSLocale } from "vexip-chat-send-hub-message"

import { LocaleISO } from "~/enums"

export const VEXIP_LOCALE: Record<LocaleISO, Callable<LocaleConfig>> = {
    [LocaleISO.DE]: (): LocaleConfig => deDELocale(),
    [LocaleISO.EN]: (): LocaleConfig => enUSLocale(),
}
