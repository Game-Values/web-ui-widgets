import type { I18nAdditionalOptions, I18nOptions } from "vue-i18n"

import { getLocale } from "./common/utils"

export default defineI18nConfig((): I18nAdditionalOptions & I18nOptions => (
    {
        fallbackLocale: getLocale(),
        legacy: false,
    }
))
