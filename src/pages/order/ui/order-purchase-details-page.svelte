<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { HelpQuestions } from "~/widgets/help"
import { OrderDetailsTable } from "~/widgets/order"

import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    order: IOrderInDB
}

export let order: IOrderInDB
</script>

<Grid>
    <GridCol
        class="gap-y-6 flex-col"
        span={7}
    >
        <h1>
            Order #{order.id}
        </h1>

        <OrderDetailsTable {order} />

        <div class="gap-x-4 flex">
            <button class="btn btn-outline btn-error">
                I haven't received the item
            </button>

            <button class="btn btn-outline btn-error">
                Cancel the order
            </button>
        </div>
    </GridCol>

    <GridCol span={5}>
        <!-- chat -->
    </GridCol>
</Grid>

<Grid>
    <GridCol>
        <HelpQuestions />
    </GridCol>
</Grid>
