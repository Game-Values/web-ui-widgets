<script lang="ts">
import type { IGame } from "$schema/api"

import { onDestroy, onMount } from "svelte"

import { LotNewListingInfoCard } from "~/entities/lot"

import { useBackground } from "$model"
import { Grid, GridCol } from "$ui/layout"

interface $$Props {
    game?: IGame
}

let { setBackground, unsetBackground } = useBackground({ src: "~/app/assets/images/bg/new-listing-bg.png" })

onMount(setBackground)

onDestroy(unsetBackground)

export let game: IGame | undefined = undefined
</script>

<Grid>
    <GridCol>
        <LotNewListingInfoCard {game} />
    </GridCol>
</Grid>
