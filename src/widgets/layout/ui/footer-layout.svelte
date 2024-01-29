<script lang="ts">
import {
    FooterCopyright,
    FooterLogo,
    FooterPaymentMethods,
    FooterPolicyLinks,
    FooterSocialLinks,
} from "~/entities/layout"

import { Content, Footer, Grid, GridCell } from "$ui/layout"
</script>

<Footer class="pt-8 pb-16 bg-grey-extra-dark">
    <Content>
        <Grid>
            <GridCell
                class="flex-col items-start gap-y-2"
                desktop={6}
                tablet={3}
            >
                <FooterLogo />

                <FooterCopyright />
            </GridCell>

            <GridCell>

            </GridCell>

            <GridCell
                desktop={6}
                tablet={6}
            >
                <FooterPolicyLinks />
            </GridCell>

            <GridCell>

            </GridCell>

            <GridCell desktop={6}>
                <FooterPaymentMethods />
            </GridCell>

            <GridCell
                desktop={6}
                tablet={6}
            >
                <FooterSocialLinks />
            </GridCell>
        </Grid>
    </Content>
</Footer>
