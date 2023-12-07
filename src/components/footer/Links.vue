<script lang="ts" setup>
import type { Route } from "~/types"
import type { I18nScope } from "vue-i18n"

import { Breakpoint } from "~/enums"

interface FooterLink {
    children: Omit<FooterLink, "children">[]
    i18n: string
    i18nScope?: I18nScope
    to?: Route
}

useI18n()

let breakpoint = useBreakpoint()

let { routerClient } = useClients()

let footerLinks = computed((): FooterLink[] => (
    [
        {
            children: [
                {
                    i18n: "label.Promotions",
                    i18nScope: "global",
                },
                {
                    i18n: "label.AI Assistant",
                    i18nScope: "global",
                },
                {
                    i18n: "Games",
                },
                {
                    i18n: "label.Top-10",
                    i18nScope: "global",
                },
            ],
            i18n: "Trade",
        },
        {
            children: [
                {
                    i18n: "About",
                },
                {
                    i18n: "label.Blog",
                    i18nScope: "global",
                },
                {
                    i18n: "Job",
                },
            ],
            i18n: "Company",
        },
        {
            children: [
                {
                    i18n: "Feedback",
                },
                {
                    i18n: "Help",
                    to: routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_GENERAL),
                },
            ],
            i18n: "Help",
        },
    ]
))

let footerLinksOffset = computed((): number => (
    useGet({
        [Breakpoint.LG]: remToNumber(useTheme("spacing.12")),
        [Breakpoint.MD]: remToNumber(useTheme("spacing.11")),
        [Breakpoint.SM]: remToNumber(useTheme("spacing.10")),
        [Breakpoint.XS]: remToNumber(useTheme("spacing.4")),
    }, getRef(breakpoint))
))
</script>

<template>
<v-space :size="footerLinksOffset">
    <v-space
        v-for="footerLink in footerLinks"
        :key="footerLink.i18n"
        size="large"
        vertical
    >
        <v-title
            :color="useTheme('colors.secondary')"
            :level="6"
            :size="useFirst(useTheme('fontSize.sm'))"
        >
            <i18n-t
                :keypath="footerLink.i18n"
                :scope="footerLink.i18nScope"
            />
        </v-title>

        <ul class="flex-col gap-y-3">
            <li
                v-for="footerLinkChild in footerLink.children"
                :key="footerLinkChild.i18n"
            >
                <ui-link :to="footerLinkChild.to">
                    <i18n-t
                        :keypath="footerLinkChild.i18n"
                        :scope="footerLinkChild.i18nScope"
                    />
                </ui-link>
            </li>
        </ul>
    </v-space>
</v-space>
</template>

<i18n lang="yaml">
de:
    Trade: Handel
    Games: Spiele
    Company: Unternehmen
    About: Über
    Job: Beruf
    Help: Hilfe
    Feedback: Feedback
en:
    Trade: Trade
    Games: Games
    Company: Company
    About: About
    Job: Job
    Help: Help
    Feedback: Feedback
</i18n>
