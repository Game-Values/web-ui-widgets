<script lang="ts">
import type { IGamesListPageData } from "~/pages/games-list"

import LayoutGrid, { Cell } from "@smui/layout-grid"

import { Content, Preview } from "~/shared/chat-send-hub-message"
import { GamesGroup } from "~/widgets/games-group"
import { GamesSlider } from "~/widgets/games-slider"
import { LotsStats } from "~/widgets/lots-stats"

export let pageData: IGamesListPageData
</script>

<Preview src="/images/main-bg.jpg" />

<Content>
    <LayoutGrid>
        <Cell spanDevices={{ desktop: 10, phone: 0, tablet: 8 }}>
            <GamesSlider />
        </Cell>

        <Cell
            align="middle"
            spanDevices={{ desktop: 2, phone: 12, tablet: 4 }}
        >
            <LotsStats />
        </Cell>
    </LayoutGrid>
</Content>

<Content>
    <LayoutGrid>
        <Cell spanDevices={{ desktop: 8, phone: 0, tablet: 10 }}>
            <GamesGroup games={pageData.games} />
        </Cell>

        <Cell spanDevices={{ desktop: 4, phone: 0, tablet: 2 }}>
            // chat
        </Cell>
    </LayoutGrid>
</Content>
