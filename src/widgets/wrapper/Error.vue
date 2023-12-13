<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

import { RouteLayout } from "~/enums"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<widget-provider-setup>
    <widget-provider-auth>
        <widget-provider-config>
            <nuxt-layout :name="RouteLayout.ERROR">
                <slot />
            </nuxt-layout>

            <widget-provider-modal />
        </widget-provider-config>
    </widget-provider-auth>
</widget-provider-setup>
</template>
