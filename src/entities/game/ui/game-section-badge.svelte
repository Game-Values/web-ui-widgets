<script lang="ts">
import type { IGame } from "$schema/api"
import type { IMouseEvent } from "$types"

import { useGame } from "~/entities/game"

import { goto } from "$app/navigation"
import { useRoute, useState } from "$model"

interface $$Props {
    game: IGame
    gameSection: string
}

let game: IGame

let gameSection: string

let { gameSection: gameSectionActive } = useGame(game)
let { route } = useRoute("/g/[gameId]", { gameId: game.id, gameSection })
let { state } = useState()

$: routeActive = gameSection === $gameSectionActive

function selectGameSection(e: IMouseEvent<HTMLAnchorElement>): void {
    if (!routeActive)
        goto(e.currentTarget.href, {
            noScroll: true,
            replaceState: false,
            state: $state,
        })
}

export {
    game,
    gameSection,
}
</script>

<a
    class="
        badge badge-lg
        gap-x-1.5
        capitalize text-nowrap
    "
    class:badge-info={routeActive}
    class:badge-outline={!routeActive}
    class:cursor-default={routeActive}
    class:hover:badge-info={!routeActive}
    class:hover:badge-outline={!routeActive}
    href={$route}
    on:click|preventDefault={selectGameSection}
>
    <span class="text-secondary">
        {gameSection}
    </span>

    <span class="badge">
        <span class="text-secondary">
            0
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
