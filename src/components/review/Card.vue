<script setup lang="ts">
import { addDays } from "@vexip-ui/utils"

defineProps<{
    review: {
        deal: string
        liked: boolean
        text: string
        username: string
    }
}>()
</script>

<template>
<v-card
    :class="[
        `
            border-r-solid
            border-r-4
        `,
        {
            'border-positive-dark': review.liked,
            'border-negative-dark': !review.liked,
        }
    ]"
>
    <v-space
        size="large"
        vertical
    >
        <div class="w-full flex gap-x-7">
            <user-review-avatar online />

            <v-space vertical>
                <v-title :level="6">
                    {{ review.username }}
                </v-title>

                <v-text disabled>
                    {{ review.deal }}
                </v-text>
            </v-space>

            <v-space
                align="end"
                vertical
            >
                <!-- todo: provide color size etc -->
                <v-time-ago
                    :datetime="addDays(Date.now(), -3)"
                    :style="`
                        color: ${useTheme('colors.white-12')};
                        font-size: 12px;
                    `"
                    title
                />

                <ui-icon
                    v-if="review.liked"
                    color="positive-light"
                    heroicons="hand-thumb-up"
                    size="24"
                />

                <ui-icon
                    v-else
                    color="negative-light"
                    heroicons="hand-thumb-down"
                    size="24"
                />
            </v-space>
        </div>

        <v-text>
            {{ review.text }}
        </v-text>
    </v-space>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-v-padding: theme("spacing.10")
    --vxp-card-body-h-padding: theme("spacing.8")
    --vxp-card-bg-color: theme("colors.white-02")

.vxp-card
    @apply ml-auto
</style>
