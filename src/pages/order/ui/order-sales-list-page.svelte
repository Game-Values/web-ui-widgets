<script lang="ts">
import type { IItem } from "$schema/api"

import { UserCard, UserLotsStats } from "~/entities/user"
import { HelpQuestions } from "~/widgets/help"
import { OrderLotsAccordion } from "~/widgets/order"
import { UserStats } from "~/widgets/user"

import { useSession } from "$model"
import { InputSearch } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    lots: IItem[]
}

let { user } = useSession()

export let lots: IItem[]
</script>

<Grid>
    <GridCol
        class="gap-y-4 flex-col"
        span={9}
    >
        <UserCard user={$user} />

        <Grid subgrid>
            <GridCol
                class="flex-col"
                span={6}
            >
                <UserLotsStats />

                <InputSearch
                    class="w-full"
                    placeholder="Search Lots"
                    placement="end"
                />
            </GridCol>

            <GridCol span={6}>

            </GridCol>
        </Grid>

        <OrderLotsAccordion {lots} />
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
