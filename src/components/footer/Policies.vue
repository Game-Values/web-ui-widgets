<script lang="ts" setup>
interface PolicyLink {
    i18n: string
    to: string // todo: route
}

useI18n()

let breakpoints = useBreakpoints()

let { routerClient } = useClients()
let { locale } = useI18n()

let policyLinks = computed((): PolicyLink[] => (
    [
        {
            i18n: "Privacy Policy",
            to: routerClient.getRoute(routerClient.routeNames.PUBLIC_POLICY_PRIVACY),
        },
        {
            i18n: "End-User License Agreement",
            to: routerClient.getRoute(routerClient.routeNames.PUBLIC_POLICY_LICENSE),
        },
        {
            i18n: "Agency Agreement",
            to: routerClient.getRoute(routerClient.routeNames.PUBLIC_POLICY_AGREEMENT),
        },
    ]
))

let isVerticalSpacing = computed((): boolean => (
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
            :src="`/images/${locale}-flag.png`"
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
        "
    >
        <li
            v-for="policyLink in policyLinks"
            :key="policyLink.i18n"
        >
            <ui-link :to="policyLink.to">
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
