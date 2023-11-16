<script lang="ts" setup>
interface PlicyLink {
    i18n: string
    to: string // todo: route
}

useI18n()

let { locale } = useI18n()

let breakpoints = useBreakpoints()

let policyLinks = computed((): PlicyLink[] => (
    [
        {
            i18n: "Privacy Policy",
            to: "javascript:void(0)",
        },
        {
            i18n: "End-User License Agreement",
            to: "javascript:void(0)",
        },
        {
            i18n: "Agency Agreement",
            to: "javascript:void(0)",
        },
    ]
))

let isVerticalSpacing = computed(() => (
    getRef(breakpoints.sm) ||
    getRef(breakpoints.xs)
))
</script>

<template>
<ui-layout-space
    :vertical="isVerticalSpacing"
    size="large"
>
    <ui-layout-space>
        <ui-data-image
            :src="`/images/${locale}-flag.png`"
            width="30"
            height="22"
        />

        <ui-typography-text
            class="uppercase"
            strong
        >
            {{ locale }}
        </ui-typography-text>
    </ui-layout-space>

    <ul
        class="
            gap-3
            lg:(flex-col)
            xs:(flex)
        ">
        <li
            v-for="policyLink in policyLinks"
            :key="policyLink.i18n"
        >
            <ui-base-link>
                <i18n-t :keypath="policyLink.i18n" />
            </ui-base-link>
        </li>
    </ul>
</ui-layout-space>
</template>

<i18n lang="yaml">
de:
    Privacy Policy: Datenschutzrichtlinie
    End-User License Agreement: Endbenutzer-Lizenzvereinbarung
    Agency Agreement: Agenturvertrag
en:
    Privacy Policy: Privacy Policy
    End-User License Agreement: End-User License Agreement
    Agency Agreement: Agency Agreement
</i18n>

