<script lang="ts">
import {
    FooterCopyright,
    FooterLinks,
    FooterLogo,
    FooterPayments,
    FooterPolicy,
    FooterSocialsLinks,
} from "~/widgets/footer"

import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    class?: string
}
</script>

<footer class="footer block bg-footer">
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
            <!-- trustpilot -->
        </GridCol>
    </Grid>

    <Grid>
        <GridCol span={6}>
            <FooterPayments />
        </GridCol>

        <GridCol span={6}>
            <FooterSocialsLinks />
        </GridCol>
    </Grid>
</footer>
