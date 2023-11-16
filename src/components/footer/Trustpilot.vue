<script lang="ts" setup>
import type { ComputedRef } from "vue"

const TRUSPILOT_MAX_SCORE: number = 5

defineProps<{
    reviews: number
    score: number
}>()

useI18n()
</script>

<template>
<ui-layout-space
    size="large"
    vertical
>
    <ui-base-link
        href="https://www.trustpilot.com"
        target="_blank"
    >
        <ui-base-icon
            custom="logo-trustpilot"
            height="40"
            width="160"
        />
    </ui-base-link>

    <ui-typography-title :level="4">
        <i18n-t keypath="Excellent" />
    </ui-typography-title>

    <ul class="flex gap-x-3">
        <li
            v-for="n in TRUSPILOT_MAX_SCORE"
            :key="n"
            :class="[
                `
                    p-2
                    w-4rem
                    h-4rem
                `,
                {
                    'bg-positive': n < TRUSPILOT_MAX_SCORE,
                    [`
                        bg-gradient-to-r
                        from-positive
                        from-0%
                        to-grey-light
                        to-100%
                    `]: n >= TRUSPILOT_MAX_SCORE,
                },
            ]"
        >
            <ui-base-icon
                custom="trustpilot-star"
                size="28"
            />
        </li>
    </ul>

    <ui-layout-space
        align="center"
        size="small"
    >
        <ui-typography-text>
            <i18n-t keypath="TrustScore">
                <template #score>
                    {{ score }}
                </template>
            </i18n-t>
        </ui-typography-text>

        <ui-layout-divider vertical />

        <ui-base-link
            href="https://www.trustpilot.com"
            target="_blank"
        >
            <ui-typography-text
                strong
                underline
            >
                <i18n-t
                    :plural="reviews"
                    keypath="plural.reviews"
                    scope="global"
                >
                    <template #n>
                        {{ reviews }}
                    </template>
                </i18n-t>
            </ui-typography-text>
        </ui-base-link>
    </ui-layout-space>
</ui-layout-space>
</template>

<i18n lang="yaml">
de:
    Excellent: Exzellent
    TrustScore: TrustScore {score}
en:
    Excellent: Excellent
    TrustScore: TrustScore {score}
</i18n>
