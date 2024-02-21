<script lang="ts">
import {
    FooterCopyright,
    FooterLinks,
    FooterLogo,
    FooterPolicy,
} from "~/widgets/footer"

import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    class?: string
}
</script>

<footer class="footer bg-footer">
    <Grid>
        <GridCol
            class="gap-y-2 flex-col"
            span={3}
            tag="aside"
        >
            <FooterLogo />

            <FooterCopyright />
        </GridCol>

        <GridCol
            class="justify-between"
            span={3}
        >
            <FooterLinks />
        </GridCol>

        <GridCol
            justify="center"
            span={3}
        >
            <FooterPolicy />
        </GridCol>

        <GridCol span={3}>
            trustpilot
        </GridCol>

        <GridCol span={6}>
            payment
        </GridCol>

        <GridCol span={6}>
            social
        </GridCol>
    </Grid>
</footer>
