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
            orders={orders}
            title="Current Sales"
        />
    </GridCol>

    <GridCol>
        <OrdersTable
            orders={orders}
            title="Sales Archive"
        />
    </GridCol>
</Grid>
