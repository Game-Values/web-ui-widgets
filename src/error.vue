<script lang="ts" setup>
import type { AsyncComponent, NuxtError } from "~/types"
import type { H3Error } from "h3"
import type { Component, Ref } from "vue"

import { HttpStatus } from "~/enums"

interface Props {
    error: H3Error
}

let props = defineProps<Props>()

let errorCode = computed((): number => (
    getRef(useError() as Ref<NuxtError>, "statusCode") ||
    HttpStatus.INTERNAL_SERVER_ERROR
))

let errorViews = computed((): Record<number, AsyncComponent> => (
    {
        [HttpStatus.INTERNAL_SERVER_ERROR]: defineAsyncComponent((): Promise<Component> => import("~/views/error/500.vue")),
        [HttpStatus.NOT_FOUND]: defineAsyncComponent((): Promise<Component> => import("~/views/error/404.vue")),
    }
))

let errorView = computed((): AsyncComponent => (
    getRef(errorViews, props.error.statusCode) ||
    getRef(errorViews, HttpStatus.INTERNAL_SERVER_ERROR)
))

onMounted((): void => useLogger().error(props.error))
</script>

<template>
<widget-provider-setup>
    <widget-provider-auth>
        <widget-provider-config>
            <nuxt-layout>
                <ui-image
                    :src="`/images/${errorCode}.png`"
                    class="fixed top-0 left-0"
                    height="var(--vxp-layout-view-height)"
                />

                <component :is="errorView" />

                <div
                    v-html="error.stack"
                    hidden
                />
            </nuxt-layout>

            <widget-provider-modal />
        </widget-provider-config>
    </widget-provider-auth>
</widget-provider-setup>
</template>

<style lang="sass" scoped>
:deep(.vxp-layout__section)
    @apply h-screen
    @apply grid grid-rows-[auto_1fr_auto]

    > footer
        @apply bg-transparent
        @apply backdrop-blur-150
</style>
