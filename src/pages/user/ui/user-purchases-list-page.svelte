<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { UserCard, UserStats } from "~/entities/user"
import { HelpQuestions } from "~/widgets/help"
import { UserPurchasesTable } from "~/widgets/user"

import { useSession } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    orders: IOrderInDB[]
}

let { user } = useSession()

export let orders: IOrderInDB[]
</script>

<Grid>
    <GridCol
        class="gap-y-4 flex-col"
        span={9}
    >
        <UserCard user={$user} />

        <h3>
            Current Purchases
        </h3>

        <UserPurchasesTable {orders} />

        <h3>
            Purchases Archive
        </h3>

        <UserPurchasesTable orders={[]} />
    </GridCol>

    <GridCol span={3}>
        <UserStats />
    </GridCol>
</Grid>

<Grid>
    <GridCol>
        <HelpQuestions />
    </GridCol>
</Grid>
