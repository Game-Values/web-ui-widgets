<script lang="ts">
import type { IMouseEvent } from "$types"

import { startCase } from "lodash"

import { goto } from "$app/navigation"
import { useRoute, useState } from "$model"

interface $$Props {
    gameSection: string
    gameSectionActive: string
    gameSectionCount: number
}

let gameSection: string

let gameSectionActive: string

let gameSectionCount: number

let { route } = useRoute({ gameSection })
let { state } = useState()

$: active = gameSection === gameSectionActive

function selectGameSection(e: IMouseEvent<HTMLAnchorElement>): void {
    if (!active)
        goto(e.currentTarget.href, {
            noScroll: true,
            replaceState: false,
            state: $state,
        })
}

export {
    gameSection,
    gameSectionActive,
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
    on:click|preventDefault={selectGameSection}
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
