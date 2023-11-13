<script lang="ts" setup>
import type { LocaleConfig } from "vexip-ui"
import type { ComputedRef, VNode } from "vue"

import { DEFAULT_LOCALE, DEFAULT_LOCALE_ISO, VEXIP_LOCALE } from "~/consts"

defineSlots<{
    default: () => VNode
}>()

let { setLocale } = useI18n()

let vexipLocale: ComputedRef<LocaleConfig> = computed((): LocaleConfig => (
    useGet<() => LocaleConfig>(VEXIP_LOCALE, DEFAULT_LOCALE_ISO)()
))

await setLocale(DEFAULT_LOCALE)
</script>

<template>
<ui-base-config :locale="vexipLocale">
    <slot />
</ui-base-config>
</template>
