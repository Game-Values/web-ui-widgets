<script lang="ts">
import { SecuritySettingsForm, TwoFactorAuthSettingsForm } from "~/features/settings"

import { Grid, GridCol } from "$ui/layout"
</script>

<Grid subgrid>
    <GridCol>
        <h1>
            Security
        </h1>
    </GridCol>

    <GridCol
        class="gap-y-6 flex-col"
        span={5}
    >
        <h4>
            Change password
        </h4>

        <SecuritySettingsForm />
    </GridCol>

    <GridCol span={2} />

    <GridCol span={5}>
        <div class="card card-secondary">
            <div class="card-body p-6 gap-y-6">
                <h3 class="card-title">
                    Two-factor authentication
                </h3>

                <TwoFactorAuthSettingsForm />
            </div>
        </div>
    </GridCol>
</Grid>
