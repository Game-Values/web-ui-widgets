<script lang="ts">
import { WithdrawMoneyForm } from "~/features/money"

import { Grid, GridCol } from "$ui/layout"
</script>

<Grid subgrid>
    <GridCol>
        <h1>
            Withdraw Money
        </h1>
    </GridCol>

    <GridCol span={6}>
        <WithdrawMoneyForm />
    </GridCol>
</Grid>
