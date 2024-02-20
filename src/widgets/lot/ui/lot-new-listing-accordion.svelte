<script lang="ts">
import type { IGame } from "$schema/api"

import { useGames } from "~/entities/game"

interface $$Props {
    games: IGame[]
}

let { games } = useGames()
</script>
