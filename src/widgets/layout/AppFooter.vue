<script lang="ts" setup>
import { Breakpoint } from "~/enums"

let trustpilotReviews = ref(2537)
let trustpilotScore = ref(4.5)

let breakpoint = useBreakpoint()

let colsOrder = computed(() => (
    {
        copyright: useGet({
            [Breakpoint.LG]: 1,
            [Breakpoint.MD]: 1,
            [Breakpoint.SM]: 1,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        links: useGet({
            [Breakpoint.LG]: 2,
            [Breakpoint.MD]: 2,
            [Breakpoint.SM]: 2,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        policies: useGet({
            [Breakpoint.LG]: 3,
            [Breakpoint.MD]: 5,
            [Breakpoint.SM]: 6,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        trustpilot: useGet({
            [Breakpoint.LG]: 4,
            [Breakpoint.MD]: 3,
            [Breakpoint.SM]: 3,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        payments: useGet({
            [Breakpoint.LG]: 5,
            [Breakpoint.MD]: 4,
            [Breakpoint.SM]: 4,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        socials: useGet({
            [Breakpoint.LG]: 6,
            [Breakpoint.MD]: 6,
            [Breakpoint.SM]: 5,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),
    }
))
</script>

<template>
<footer class="py-10 bg-grey-extra-dark">
    <ui-layout-content>
        <ui-layout-row
            :gap="[
                remToNumber(useTheme('spacing.9')),
                remToNumber(useTheme('spacing.12')),
            ]"
        >
            <ui-layout-col
                :lg="6"
                :md="8"
                :sm="8"
                :xs="24"
                :order="colsOrder.copyright"
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
            >
                <footer-copyright />
            </ui-layout-col>

            <ui-layout-col
                :lg="6"
                :md="8"
                :sm="8"
                :xs="24"
                :order="colsOrder.links"
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
            >
                <footer-links />
            </ui-layout-col>

            <ui-layout-col
                :lg="6"
                :md="12"
                :sm="24"
                :xs="24"
                :order="colsOrder.policies"
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
            >
                <footer-policies />
            </ui-layout-col>

            <ui-layout-col
                :lg="6"
                :md="8"
                :sm="8"
                :xs="24"
                :order="colsOrder.trustpilot"
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
            >
                <footer-trustpilot
                    :reviews="trustpilotReviews"
                    :score="trustpilotScore"
                />
            </ui-layout-col>

            <ui-layout-col
                :lg="12"
                :md="24"
                :sm="24"
                :xs="24"
                :order="colsOrder.payments"
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
            >
                <footer-payments />
            </ui-layout-col>

            <ui-layout-col
                :lg="12"
                :md="12"
                :sm="24"
                :xs="24"
                :order="colsOrder.socials"
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
            >
                <footer-socials />
            </ui-layout-col>
        </ui-layout-row>
    </ui-layout-content>
</footer>
</template>
