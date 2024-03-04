<script lang="ts">
import { HelpTabs } from "~/entities/help"
import { HelpQuestions } from "~/widgets/help"

import { Grid, GridCol } from "$ui/layout"

interface $$Slots {
    default: NonNullable<unknown>
}
</script>

<Grid>
    <GridCol>
        <h1>
            Help
        </h1>
    </GridCol>

    <GridCol>
        <HelpTabs />
    </GridCol>

    <GridCol span={8}>
        <slot />
    </GridCol>

    <GridCol span={4}>
        <HelpQuestions vertical />
    </GridCol>
</Grid>
