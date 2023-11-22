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
<v-space
    :vertical="isVerticalSpacing"
    size="large"
>
    <v-space>
        <ui-image
            :src="`https://github.com/Game-Values/web-ui-widgets/blob/master/src/public/images/${locale}-flag.png`"
            height="22"
            width="30"
        />

        <v-text
            class="uppercase"
            strong
        >
            {{ locale }}
        </v-text>
    </v-space>

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
            <ui-link>
                <i18n-t :keypath="policyLink.i18n" />
            </ui-link>
        </li>
    </ul>
</v-space>
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
