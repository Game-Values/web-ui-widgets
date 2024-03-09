<script lang="ts">
import { PolicyLinks } from "~/entities/policy"
import { FooterCopyright, FooterLinks, FooterLogo, FooterPayments, FooterSocialsLinks } from "~/widgets/footer"

import { Grid, GridCol } from "$ui/layout"
</script>

<footer
    class="
        footer
        relative z-20
        block
        bg-footer
    "
>
    <Grid>
        <GridCol
            class="gap-y-2 flex-col"
            span={6}
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
            <PolicyLinks class="flex-col text-secondary" />
        </GridCol>
    </Grid>

    <Grid>
        <GridCol span={6}>
            <FooterPayments />
        </GridCol>

        <GridCol
            justify="end"
            span={6}
        >
            <FooterSocialsLinks />
        </GridCol>
    </Grid>
</footer>
