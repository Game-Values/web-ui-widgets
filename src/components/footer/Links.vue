<script lang="ts" setup>
import type { I18nScope } from "vue-i18n"

import { Breakpoint } from "~/enums"

interface FooterLink {
    children: Omit<FooterLink, "children">[]
    i18n: string
    i18nScope?: I18nScope
    to: string // todo: route
}

useI18n()

let breakpoint = useBreakpoint()

let footerLinks = computed((): FooterLink[] => (
    [
        {
            children: [
                {
                    i18n: "label.Promotions",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "label.AI Assistant",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "Games",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "label.Top-10",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
            ],
            i18n: "Trade",
            to: "javascript:void(0)",
        },
        {
            children: [
                {
                    i18n: "About",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "label.Blog",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "Job",
                    to: "javascript:void(0)",
                },
            ],
            i18n: "Company",
            to: "javascript:void(0)",
        },
        {
            children: [
                {
                    i18n: "Feedback",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "Help",
                    to: "javascript:void(0)",
                },
            ],
            i18n: "Help",
            to: "javascript:void(0)",
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
                <ui-link>
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
