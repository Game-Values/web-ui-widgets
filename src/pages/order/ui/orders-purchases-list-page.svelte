<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { OrdersTable } from "~/widgets/order"

import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    orders: IOrderInDB[]
}

export let orders: IOrderInDB[]
</script>

<Grid subgrid>
    <GridCol>
        <OrdersTable
            {orders}
            title="Current Purchases"
        />
    </GridCol>

    <GridCol>
        <OrdersTable
            orders={[]}
            title="Purchases Archive"
        />
    </GridCol>
</Grid>
