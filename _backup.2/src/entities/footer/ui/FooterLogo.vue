<script setup lang="ts">
import { UiLogoGrayscaleIcon } from "~/shared/ui/icons"
</script>

<template>
<v-app-bar-nav-icon
    width="180"
    variant="plain"
>
    <ui-logo-grayscale-icon />
</v-app-bar-nav-icon>
</template>

<style lang="sass" scoped>
.v-app-bar-nav-icon
    @apply rounded-0.5rem
    @apply opacity-100

    :deep(.v-icon)
        --v-icon-size-multiplier: 6.5

        @apply max-h-2.5rem
</style>
