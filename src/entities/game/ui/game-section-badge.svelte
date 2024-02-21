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
        capitalize text-nowrap
    "
    class:badge-info={active}
    class:badge-outline={!active}
    class:cursor-default={active}
    class:hover:badge-info={!active}
    class:hover:badge-outline={!active}
    href={$route}
>
    <span class="text-secondary">
        {startCase(gameSection)}
    </span>

    <span class="badge">
        <span class="text-secondary">
            {gameSectionCount}
        </span>
    </span>
</a>

<style>
.badge {
    @apply border-white/[0.12];
    @apply text-inherit;
}

.badge:not(.badge-info) {
    @apply bg-white/[0.12];
}
</style>
