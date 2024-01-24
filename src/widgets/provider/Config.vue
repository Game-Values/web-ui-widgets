<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

import { DEFAULT_LOCALE, DEFAULT_LOCALE_ISO, VEXIP_LOCALE } from "~/consts"

const DEFAULT_GAP: number[] = Array(2).fill(remToNumber(useTheme("spacing.9")))

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { setLocale } = useI18n()

await setLocale(DEFAULT_LOCALE)
</script>

<template>
<v-config-provider
    :props="{
        avatar: {
            circle: true,
        },
        card: {
            shadow: 'hover',
        },
        drawer: {
            transfer: true,
            undivided: true,
        },
        dropdown: {
            transfer: true,
        },
        form: {
            labelAlign: 'top',
        },
        grid: {
            gap: DEFAULT_GAP,
        },
        layout: {
            footer: true,
            noAside: true,
        },
        modal: {
            title: ' ',
            width: 415,
            autoRemove: true,
            noFooter: true,
            transfer: true,
            undivided: true,
        },
        row: {
            columnFlex: true,
            gap: DEFAULT_GAP,
        },
        select: {
            transfer: true,
        },
        table: {
            highlight: true,
        },
        tooltip: {
            transfer: true,
        },
    }"
    :locale="useGet(VEXIP_LOCALE, DEFAULT_LOCALE_ISO)()"
>
    <slot />
</v-config-provider>
</template>
