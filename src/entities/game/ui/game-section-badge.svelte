<script lang="ts">
import { startCase } from "lodash-es"

import { useRoute } from "$model"

interface $$Props {
    gameSection: string
    gameSectionActive: string
    gameSectionCount: number
}

let gameSection: string

let gameSectionActive: string

let gameSectionCount: number

let { route } = useRoute({ gameSection })

$: active = gameSection === gameSectionActive

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
