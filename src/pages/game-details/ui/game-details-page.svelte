<script lang="ts">
import type { IGame } from "$api"

import { GameInfo } from "~/entities/game"
import { GameSections } from "~/features/game"

import { SearchInput, Switch } from "$ui/data"
import { Content, Grid, GridCell } from "$ui/layout"

export let game: IGame
</script>

<Content>
    <Grid class="gap-y-16">
        <GridCell>
            <GameInfo {game}>
                <svelte:fragment slot="gameSections">
                    <GameSections {game} />
                </svelte:fragment>
            </GameInfo>
        </GridCell>

        <GridCell desktop={6}>
            <SearchInput />
        </GridCell>

        <GridCell desktop={6}>
            <Switch
                checked
                label="Online Players Only"
            />
        </GridCell>

        <GridCell desktop={3}>
            // filters
        </GridCell>

        <GridCell desktop={9}>
            // lots
        </GridCell>

        <GridCell desktop={7}>
            // faq
        </GridCell>

        <GridCell desktop={5}>
            // faq form
        </GridCell>
    </Grid>
</Content>
