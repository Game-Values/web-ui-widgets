<script lang="ts">
import type { IGame, IItem } from "$schema/api"
import type { ILotNewOrderPageContext } from "~/pages/lot"

import { HelpNewLotOrderAccordion } from "~/entities/help"
import { LotNewOrderInfo, LotNewOrderSteps, LotNewOrderTitle } from "~/entities/lot"
import { LotNewOrderForm } from "~/features/lot"
import { HelpQuestions } from "~/widgets/help"

import { useContext } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    game: IGame
    lot: IItem
}

let game: IGame

let lot: IItem

useContext<ILotNewOrderPageContext>({ game, lot, step: 1 })

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
        <LotNewOrderTitle />

        <LotNewOrderSteps />

        <LotNewOrderInfo />

        <LotNewOrderForm />
    </GridCol>

    <GridCol span={5}>
        <!-- chat -->
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
