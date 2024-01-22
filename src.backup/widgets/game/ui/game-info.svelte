<Paper
    class="
        px-8 py-10
        flex flex-col gap-1.875rem
        border border-solid border-white/12
        backdrop-blur-16
    "
    variant="unelevated"
>
    <Title class="text-level-1">
        {game.name}
    </Title>

    <Subtitle>
        {@html game.attributes.description}
    </Subtitle>

    <Content>
        <GameSections {game} />
    </Content>
</Paper>

<script lang="ts">
import type { IGame } from "~/entities/game"

import Paper, { Title, Subtitle, Content } from "@smui/paper"

import { GameSections } from "~/features/game"

export let game: IGame
</script>
