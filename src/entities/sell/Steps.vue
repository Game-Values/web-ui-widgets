<script setup lang="ts">
let { storeClient } = useClients()

let { sellStep } = storeToRefs(storeClient.sellStore)

let steps = [
    "Main Information",
    "Product Information",
    "Finance Information",
]
</script>

<template>
<v-timeline>
    <v-timeline-item
        v-for="(step, i) in steps"
        :key="i"
        :style="{
            '--vxp-timeline-pointer-size': useTheme('spacing.13'),
            '--vxp-timeline-line-color': (
                sellStep > i
                    ? useTheme('colors.primary')
                    : useTheme('colors.secondary')
            ),
        }"
    >
        <v-text strong>
            {{ step }}
        </v-text>

        <template #signal>
            <div
                :style="{
                    backgroundColor: (
                        sellStep + 1 > i
                            ? useTheme('colors.primary')
                            : useTheme('colors.secondary')
                    ),
                    color: (
                        sellStep + 1 > i
                            ? useTheme('colors.white')
                            : useTheme('colors.grey-dark')
                    ),
                    boxShadow: sellStep === i
                        ? '0 0.6rem 5.5rem 0 rgba(61, 152, 255, 0.4)'
                        : '',
                }"
                class="
                    fit
                    flex-center
                    rounded-full
                    text-level-4
                    font-semibold
                    leading-none
                "
            >
                <ui-icon
                    v-if="sellStep > i"
                    heroicons="check"
                    size="24"
                />

                <v-text v-else>
                    {{ i + 1 }}
                </v-text>
            </div>
        </template>
    </v-timeline-item>
</v-timeline>
</template>

<style lang="sass" scoped>
.vxp-timeline
    @apply gap-y-7rem

    :deep(.vxp-timeline__content)
        @apply top-3 left-4

    :deep(.vxp-timeline__line)
        @apply h-11rem
</style>
