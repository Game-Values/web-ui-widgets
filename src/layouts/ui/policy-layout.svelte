<script lang="ts">
import { PolicyCard, PolicyTabs } from "~/entities/policy"
import { PolicySavePdfButton } from "~/features/policy"

import { useRoute } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Slots {
    default: NonNullable<unknown>
}

let { routeMeta } = useRoute()
</script>

<Grid>
    <GridCol>
        <PolicyTabs />
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
