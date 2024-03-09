<script lang="ts">
import { PolicyCard, policyLinks } from "~/entities/policy"
import { PolicySavePdfButton } from "~/features/policy"

import { useRoute } from "$model"
import { Grid, GridCol } from "$ui/layout"
import { NavTabs } from "$ui/navigation"

interface $$Slots {
    default: NonNullable<unknown>
}

let { routeMeta } = useRoute()
</script>

<Grid>
    <GridCol>
        <NavTabs links={policyLinks} />
    </GridCol>

    {#if $routeMeta.title}
        <GridCol>
            <h1 class="gap-x-8 flex">
                {$routeMeta.title}

                <PolicySavePdfButton />
            </h1>
        </GridCol>
    {/if}

    <GridCol>
        <PolicyCard>
            <slot />
        </PolicyCard>
    </GridCol>
</Grid>
