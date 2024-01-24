<script lang="ts">
import type { IGame } from "~/shared/model"

import IconButton from "@smui/icon-button"

import IconHeart from "virtual:icons/heroicons/heart"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"

import { gameLikeToggle } from "~/features/game"

export let game: IGame
</script>

<IconButton
    class="
        relative left-2.5
        p-0
        text-black
        icon-button-primary
    "
    size="button"
    on:click={() => gameLikeToggle(game.id, false)}
>
    <IconHeart class="text-1.25rem" />

    <IconHeartSolid class="text-1.25rem" />
</IconButton>
