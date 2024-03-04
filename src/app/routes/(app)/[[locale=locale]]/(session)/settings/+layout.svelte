<script lang="ts">
import { settingsLinks } from "~/entities/settings"

import { Grid, GridCol } from "$ui/layout"
import { NavTabs } from "$ui/navigation"

interface $$Slots {
    default: NonNullable<unknown>
}
</script>

<Grid subgrid>
    <GridCol>
        <NavTabs links={settingsLinks} />
    </GridCol>

    <GridCol>
        <slot />
    </GridCol>
</Grid>
