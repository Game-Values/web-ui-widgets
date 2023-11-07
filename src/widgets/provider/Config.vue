<script lang="ts" setup>
import type { LocaleConfig } from "vexip-ui"
import type { Ref } from "vue"

import { DEFAULT_LOCALE, DEFAULT_LOCALE_ISO } from "~/consts"

interface Slots {
    default: () => any
}

defineSlots<Slots>()

let { setLocale } = useI18n()

let vexipUiLocale: Ref<Partial<LocaleConfig>> = ref<Partial<LocaleConfig>>({})

await Promise.all([
    import(`@/locales/vexip-ui/${DEFAULT_LOCALE_ISO}.json`)
        .then((localeConfig: LocaleConfig) => setRef(vexipUiLocale, localeConfig)),

    setLocale(DEFAULT_LOCALE),
])
</script>

<template>
<ui-base-config
    :locale="vexipUiLocale"
>
    <slot />
</ui-base-config>
</template>
