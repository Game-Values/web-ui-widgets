<script lang="ts" setup>
import type { I18nScope } from "vue-i18n"

import { Breakpoint } from "~/enums"

interface FooterLink {
    i18n: string
    i18nScope?: I18nScope
    to: string // todo: route
    children: Omit<FooterLink, "children">[]
}

useI18n()

let breakpoint = useBreakpoint()

let footerLinks = computed((): FooterLink[] => (
    [
        {
            i18n: "Trade",
            to: "javascript:void(0)",
            children: [
                {
                    i18n: "labels.Promotions",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "labels.AI Assistant",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "Games",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "labels.Top-10",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
            ],
        },
        {
            i18n: "Company",
            to: "javascript:void(0)",
            children: [
                {
                    i18n: "About",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "labels.Blog",
                    i18nScope: "global",
                    to: "javascript:void(0)",
                },
                {
                    i18n: "Job",
                    to: "javascript:void(0)",
                },
            ],
        },
        {
            i18n: "Help",
            to: "javascript:void(0)",
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
<ui-layout-space :size="footerLinksOffset">
    <ui-layout-space
        v-for="footerLink in footerLinks"
        :key="footerLink.i18n"
        size="large"
        vertical
    >
        <ui-typography-title
            :level="6"
            :color="useTheme('colors.secondary')"
            :size="useFirst(useTheme('fontSize.sm'))"
        >
            <i18n-t
                :keypath="footerLink.i18n"
                :scope="footerLink.i18nScope"
            />
        </ui-typography-title>

        <ul class="flex-col gap-y-3">
            <li
                v-for="footerLinkChild in footerLink.children"
                :key="footerLinkChild.i18n"
            >
                <ui-base-link>
                    <i18n-t
                        :keypath="footerLinkChild.i18n"
                        :scope="footerLinkChild.i18nScope"
                    />
                </ui-base-link>
            </li>
        </ul>
    </ui-layout-space>
</ui-layout-space>
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