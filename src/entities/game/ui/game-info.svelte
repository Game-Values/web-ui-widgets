<script lang="ts">
import type { IGame } from "$api"

import { Paper, PaperContent, PaperSubtitle, PaperTitle } from "$ui/common"
import { Card, CardContent } from "$ui/data"

export let game: IGame
</script>

<Card class="backdrop-blur-2xl">
    <CardContent class="border border-solid border-white/12">
        <Paper>
            <PaperTitle class="text-level-1">
                {game.name}
            </PaperTitle>

            <PaperSubtitle>
                {@html game.attributes.description}
            </PaperSubtitle>

            <PaperContent>
                <slot name="gameSections" />
            </PaperContent>
        </Paper>
    </CardContent>
</Card>
