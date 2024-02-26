<script lang="ts">
import type { IOrderInDB } from "$schema/api"
import type { IUserPurchaseDetailsPageContext } from "~/pages/user"

import { HelpQuestions } from "~/widgets/help"
import { UserPurchaseDetailsTable } from "~/widgets/user"

import { useContext } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    order: IOrderInDB
}

let order: IOrderInDB

let { context } = useContext<IUserPurchaseDetailsPageContext>({ order })

export {
    order,
}
</script>

<Grid>
    <GridCol
        class="gap-y-6 flex-col"
        span={7}
    >
        <h1>
            Order #{$context.order.id}
        </h1>

        <UserPurchaseDetailsTable />

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
