<script setup lang="ts">
import type { Route } from "~/types"

defineProps<{
    routes: Route[],
}>()
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-button-group size="small">
        <ui-button-link
            v-for="route in routes"
            :key="route.name"
            :type="
                route.meta.active
                    ? 'primary'
                    : 'default'
            "
            :to="route"
        >
            {{ route.meta.seo.title }}
        </ui-button-link>
    </v-button-group>

    <app-router-view />
</v-space>
</template>

<style lang="sass" scoped>
.vxp-button-vars
    --vxp-button-b-color: transparent

.vxp-button-group
    @apply w-full

    > .vxp-button
        @apply flex-1

        &:not(&--primary)
            background-color: theme("colors.white-02")
</style>
