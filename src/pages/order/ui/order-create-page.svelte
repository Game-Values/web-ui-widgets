<script lang="ts">
import type { IGame, IItem } from "$schema/api"

import { HelpNewLotOrderAccordion } from "~/entities/help"
import { OrderInfo, OrderSteps, OrderTitle } from "~/entities/order"
import { OrderCreateForm } from "~/features/order"
import { HelpQuestions } from "~/widgets/help"

import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    game: IGame
    lot: IItem
}

let game: IGame

let lot: IItem

export {
    game,
    lot,
}
</script>

<Grid>
    <GridCol
        class="gap-y-12 flex flex-col"
        span={7}
    >
        <OrderTitle game={game} />

        <OrderSteps step={1} />

        <OrderInfo
            game={game}
            lot={lot}
        />

        <OrderCreateForm
            game={game}
            lot={lot}
        />
    </GridCol>

    <GridCol span={5}>
        <!-- chat.ts -->
    </GridCol>
</Grid>

<Grid>
    <GridCol span={7}>
        <HelpNewLotOrderAccordion />
    </GridCol>

    <GridCol span={5}>
        <HelpQuestions vertical />
    </GridCol>
</Grid>
