<script lang="ts">
import type { IGame } from "$schema/api"

import { GamesGroup } from "~/widgets/game"
import { MainSlider } from "~/widgets/slider"

import { Container } from "$ui/layout"

interface $$Props {
    games: IGame[]
}

export let games: IGame[]
</script>

<Container>
    <MainSlider />

    <!-- todo: grid like this classes -->
    <div class="grid grid-cols-12">
        <div class="col-span-8">
            <GamesGroup {games} />
        </div>

        <div class="col-span-4">
            // chat
        </div>
    </div>
</Container>
