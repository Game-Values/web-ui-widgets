<script setup lang="ts">
import type { Route } from "~/types"

defineProps<{
    routes: (
        Route & {
            custom?: string
            heroicons?: string
        }
    )[],
}>()
</script>

<template>
<swiper
    :space-between="remToNumber(useTheme('spacing.5'))"
    slides-per-view="auto"
>
    <swiper-slide
        v-for="route in routes"
        :key="route.name"
    >
        <ui-button-link
            :type="
                route.meta.active
                    ? 'primary'
                    : 'default'
            "
            :to="route"
            block
        >
            <v-space
                align="center"
                size="large"
                vertical
            >
                <ui-icon
                    v-if="(
                        route.custom ||
                        route.heroicons
                    )"
                    :custom="route.custom"
                    :heroicons="route.heroicons"
                    size="40"
                />

                <v-title :level="6">
                    {{ route.meta.seo.title }}
                </v-title>
            </v-space>
        </ui-button-link>
    </swiper-slide>
</swiper>
</template>

<style lang="sass" scoped>
.vxp-button-vars
    --vxp-button-v-padding: theme("spacing.8")
    --vxp-button-h-padding: theme("spacing.8")
    --vxp-button-height: theme("height.route-nav-button")
    --vxp-button-radius: theme("spacing.5")

    &:not(.vxp-button--primary)
        --vxp-button-b-color: theme("colors.white-02")
        --vxp-button-bg-color: theme("colors.white-02")
        --vxp-button-color: theme("colors.secondary")

:deep(.vxp-button)
    @apply w-route-nav-button
    @apply whitespace-normal

:deep(.vxp-linker)
    @apply items-start

:deep(.swiper-slide)
    @apply w-route-nav-button
</style>
