<script lang="ts">
import { NotificationsSettingsForm } from "~/features/settings"

import { Grid, GridCol } from "$ui/layout"
</script>

<Grid subgrid>
    <GridCol>
        <h1>
            Notifications
        </h1>
    </GridCol>

    <GridCol span={5}>
        <NotificationsSettingsForm />
    </GridCol>
</Grid>
