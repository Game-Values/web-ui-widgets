<GamePreview game={data.game} />

<Content>
    <LayoutGrid>
        <Cell span={12}>
            <GameInfo game={data.game} />
        </Cell>

        <Cell span={12}>
            <InnerGrid>
                <Cell span={6}>
                    <LotSearch />
                </Cell>

                <Cell span={6}>
                    <LotOnlinePlayersToggle />
                </Cell>
            </InnerGrid>
        </Cell>

        <Cell span={12}>
            <InnerGrid>
                <Cell span={3}>
                    // todo: filters
                </Cell>

                <Cell span={9}>
                    <GameLots />
                </Cell>
            </InnerGrid>
        </Cell>

        <Cell span={12}>
            <InnerGrid>
                <Cell span={7}>
                    <LazyGameFaq />
                </Cell>

                <Cell span={5}>
                    faq form
                </Cell>
            </InnerGrid>
        </Cell>
    </LayoutGrid>
</Content>

<script lang="ts">
import type { IGamePageData } from "~/pages/game"

import LayoutGrid, { InnerGrid, Cell } from "@smui/layout-grid"
import { onDestroy } from "svelte"

import { lotsSearch } from "~/entities/lot"
import { LotOnlinePlayersToggle, LotSearch } from "~/features/lot"
import { Content } from "~/shared/chat-send-hub-message"
import { GameInfo, GameLots, GamePreview, LazyGameFaq } from "~/widgets/game"


onDestroy(() => lotsSearch.set(Object.create(null)))

export let data: IGamePageData
</script>
