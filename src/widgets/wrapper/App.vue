<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

import { Layout } from "~/enums"

defineProps<{
    layout?: Layout
}>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<widget-provider-config>
    <nuxt-layout :name="layout">
        <slot />
    </nuxt-layout>

    <widget-provider-modal />
</widget-provider-config>
</template>
