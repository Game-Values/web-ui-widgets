<script lang="ts">
import type { IGame } from "$schema/api"

import { Container } from "$ui/layout"

interface $$Props {
    game: IGame
}

export let game: IGame
</script>

<Container>
    GAME: <br /> {JSON.stringify(game)}
</Container>
