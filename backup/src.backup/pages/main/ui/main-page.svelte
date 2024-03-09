<Content>
    <LayoutGrid>
        <Cell span={12}>
            <MainSlider />
        </Cell>

        <Cell spanDevices={{ desktop: 8, tablet: 12, phone: 12 }}>
            <GameGroup games={data.games} />
        </Cell>

        <Cell spanDevices={{ desktop: 4, tablet: 0, phone: 0 }}>
            chat
        </Cell>
    </LayoutGrid>
</Content>

<script lang="ts">
import game-detailstype { IMainPageData } from "~/routes/main"

import LayoutGrid, { Cell } from "@smui/layout-grid"

import { Content } from "~/shared/chat-send-hub-message"
import { GameGroup } from "~/widgets/game"
import { MainSlider } from "~/widgets/slider"

export let data: IMainPageData
</script>
