<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<widget-provider-setup>
    <widget-provider-auth>
        <widget-provider-config>
            <nuxt-layout>
                <slot />
            </nuxt-layout>

            <widget-provider-modal />

            <widget-provider-seo />
        </widget-provider-config>
    </widget-provider-auth>
</widget-provider-setup>
</template>
