<script lang="ts" setup>
import { UiTitle } from "~/shared/ui"
</script>

<template>
<v-card>
    <v-card-item
        class="
            p-0
            bg-white/2
            border
            border-solid
            border-white/15
            rounded-2
            transition-colors
        "
    >
        <slot name="image" />
    </v-card-item>

    <v-card-item class="my-4">
        <v-card-title>
            <slot name="title" />

            <slot name="like" />
        </v-card-title>
    </v-card-item>
</v-card>
</template>

<style lang="sass" scoped>
.v-card
    :deep(.v-card__image)
        @apply h-8.5rem

.v-card-item
    @apply p-0

.v-card-title
    @apply flex justify-between
    @apply gap-1rem
    @apply whitespace-normal
</style>
