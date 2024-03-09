<script lang="ts">
import { UserSettingsForm } from "~/features/settings"

import { Grid, GridCol } from "$ui/layout"
</script>

<Grid subgrid>
    <GridCol>
        <h1>
            Settings
        </h1>
    </GridCol>

    <GridCol span={5}>
        <UserSettingsForm />
    </GridCol>
</Grid>
