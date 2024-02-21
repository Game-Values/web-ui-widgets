<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { startCase } from "lodash-es"

import { useContext, useRoute } from "$model"

interface $$Props {
    gameSection: string
    gameSectionCount: number
}

let gameSection: string

let gameSectionCount: number

let { context } = useContext<IGameDetailsPageContext>()
let { route } = useRoute({ gameSection })

$: active = gameSection === $context.gameSectionActive

export {
    gameSection,
    gameSectionCount,
}
</script>

<a
    class="
        badge badge-lg
        gap-x-1.5
        border-white/[0.12]
        capitalize text-nowrap
    "
    class:badge-info={active}
    class:badge-outline={!active}
    class:cursor-default={active}
    class:hover:badge-info={!active}
    class:hover:badge-outline={!active}
    href={$route}
>
    <span class="ext-white/70 bg-white/02">
        {startCase(gameSection)}
    </span>

    <span class="badge bg-white/[0.12] border-white/[0.12]">
        <span class="text-white/70">
            {gameSectionCount}
        </span>
    </span>
</a>
