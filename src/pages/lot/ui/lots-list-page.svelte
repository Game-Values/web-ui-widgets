<script lang="ts">
import type { IItem } from "$schema/api"
import type { IContextUser } from "$types"
import type { ILotsListPageContext } from "~/pages/lot"

import { AuthOnly } from "~/entities/auth"
import { SessionUserOnly } from "~/entities/session"
import { UserLotsStats } from "~/entities/user"
import { LotsAccordion } from "~/widgets/lot"

import { useContext, useRoute } from "$model"
import { InputSearch } from "$ui/data"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    lots: IItem[]
}

let lots: IItem[]

let { context } = useContext<IContextUser>()
let { route: lotCreateRoute } = useRoute("/lots/create")

useContext<ILotsListPageContext>({
    lots: lots.map((lot: IItem): IItem => Object.assign(lot, { visible: true })),
})

export {
    lots,
}
</script>

<Grid subgrid>
    <SessionUserOnly user={$context.user}>
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

        <GridCol
            justify="end"
            span={6}
        >
            <AuthOnly>
                <a
                    class="btn btn-ring w-full max-w-72"
                    href={$lotCreateRoute}
                >
                    New Listing
                </a>
            </AuthOnly>
        </GridCol>
    </SessionUserOnly>

    <GridCol>
        <LotsAccordion />
    </GridCol>
</Grid>
