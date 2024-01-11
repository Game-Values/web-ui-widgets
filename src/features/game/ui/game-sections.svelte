<script lang="ts">
import type { IGame, IGameSection } from "~/entities/game"

import Chip, { Set, Text } from "@smui/chips"
import Badge from "@smui-extra/badge"
import { first } from "lodash-es"
import { onMount } from "svelte"

import { searchLots } from "~/entities/lot"
import { Facet } from "~/entities/facets"
import { filters, updateFilters } from "~/entities/filters"

let game: IGame

let selected: IGameSection = first(game.attributes.sections)!

onMount(() => whenGameSectionChanged(selected))

function whenGameSectionChanged(gameSection: IGameSection) {
    updateFilters({
        [Facet.TYPE]: gameSection.name,
    })

    searchLots(game.id, $filters)
}

export {
    game,
}
</script>

<Set
    let:chip
    bind:selected
    chips={game.attributes.sections}
    choice
>
    <Chip {chip} on:click={() => whenGameSectionChanged(chip)}>
        <Text>
            {chip.name}
        </Text>

        <Badge class="min-w-6 min-h-6">
            {chip.count}
        </Badge>
    </Chip>
</Set>
