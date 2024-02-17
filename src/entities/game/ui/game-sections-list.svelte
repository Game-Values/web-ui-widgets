<script lang="ts">
import type { IGame } from "$schema/api"
import type { IMouseEvent } from "$types"

import { useGame } from "~/entities/game"

import { goto } from "$app/navigation"
import { isActiveRoute } from "$lib/helpers"
import { usePageState } from "$model"
import { route } from "$schema/routes"

let game: IGame

let { gameSections } = useGame(game)
let { pageState } = usePageState()

$: gameSectionsKeys = Object.keys(gameSections)

$: activeSection = (
    gameSectionsKeys.find((gameSection: string) => $isActiveRoute("/g/[gameId]", { gameId: game.id, gameSection }))
)

$: isActiveSection = (gameSection: string): boolean => {
    return (
        activeSection
            ? activeSection === gameSection
            : gameSectionsKeys[0] === gameSection
    )
}

function selectSection(e: IMouseEvent<HTMLAnchorElement>, gameSection: string): void {
    if (!isActiveSection(gameSection))
        goto(e.currentTarget.href, {
            noScroll: true,
            replaceState: false,
            state: $pageState,
        })
}

export {
    game,
}
</script>

<ul class="flex flex-wrap gap-3">
    {#each gameSectionsKeys as gameSection (gameSection)}
        <li>
            <a
                style:border-color="rgba(255, 255, 255, 0.12)"
                class="
                    badge badge-lg
                    gap-x-1.5
                    capitalize text-nowrap
                "
                class:badge-info={isActiveSection(gameSection)}
                class:badge-outline={!isActiveSection(gameSection)}
                class:cursor-default={isActiveSection(gameSection)}
                class:hover:badge-info={!isActiveSection(gameSection)}
                class:hover:badge-outline={!isActiveSection(gameSection)}
                href={route("/g/[gameId]", { gameId: game.id, gameSection })}
                on:click|preventDefault={e => selectSection(e, gameSection)}
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
        </li>
    {/each}
</ul>

<style>
.badge {
    @apply border-white/[0.12];
    @apply text-inherit;
}

.badge:not(.badge-info) {
    @apply bg-white/[0.12];
}
</style>
