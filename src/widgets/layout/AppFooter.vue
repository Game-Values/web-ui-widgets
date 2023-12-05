<script lang="ts" setup>
import { Breakpoint } from "~/enums"

let trustpilotReviews = ref(2537)
let trustpilotScore = ref(4.5)

let breakpoint = useBreakpoint()

let colsOrder = computed((): Record<string, number> => (
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

        payments: useGet({
            [Breakpoint.LG]: 5,
            [Breakpoint.MD]: 4,
            [Breakpoint.SM]: 4,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        policies: useGet({
            [Breakpoint.LG]: 3,
            [Breakpoint.MD]: 5,
            [Breakpoint.SM]: 6,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        socials: useGet({
            [Breakpoint.LG]: 6,
            [Breakpoint.MD]: 6,
            [Breakpoint.SM]: 5,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),

        trustpilot: useGet({
            [Breakpoint.LG]: 4,
            [Breakpoint.MD]: 3,
            [Breakpoint.SM]: 3,
            [Breakpoint.XS]: 1,
        }, getRef(breakpoint)),
    }
))
</script>

<template>
<footer class="relative z-1 py-10 bg-grey-extra-dark">
    <ui-content>
        <v-row
            :gap="[
                remToNumber(useTheme('spacing.9')),
                remToNumber(useTheme('spacing.12')),
            ]"
        >
            <v-column
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
                :lg="6"
                :md="8"
                :order="colsOrder.copyright"
                :sm="8"
                :xs="24"
            >
                <footer-copyright />
            </v-column>

            <v-column
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
                :lg="6"
                :md="8"
                :order="colsOrder.links"
                :sm="8"
                :xs="24"
            >
                <footer-links />
            </v-column>

            <v-column
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
                :lg="6"
                :md="12"
                :order="colsOrder.policies"
                :sm="24"
                :xs="24"
            >
                <footer-policies />
            </v-column>

            <v-column
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
                :lg="6"
                :md="8"
                :order="colsOrder.trustpilot"
                :sm="8"
                :xs="24"
            >
                <footer-trustpilot
                    :reviews="trustpilotReviews"
                    :score="trustpilotScore"
                />
            </v-column>

            <v-column
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
                :lg="12"
                :md="24"
                :order="colsOrder.payments"
                :sm="24"
                :xs="24"
            >
                <footer-payments />
            </v-column>

            <v-column
                class="
                    md:(justify-start)
                    xs:(justify-center)
                "
                :lg="12"
                :md="12"
                :order="colsOrder.socials"
                :sm="24"
                :xs="24"
            >
                <footer-socials />
            </v-column>
        </v-row>
    </ui-content>
</footer>
</template>
