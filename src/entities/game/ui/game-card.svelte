<script lang="ts">
import type { IGame } from "~/entities/game"

import Card, { Actions, ActionIcons, Media, PrimaryAction } from "@smui/card"
import IconButton, { Icon } from "@smui/icon-button";
import { Image } from "@smui/image-list"
import { kebabCase } from "lodash-es"

import { asyncComponent } from "~/shared/lib"
import IconHeart from "~icons/heroicons/heart"

export let game: IGame
</script>

<Card>
    <Media class="bg-white/2 border border-solid border-white/15 rounded-xl">
        <PrimaryAction>
            {#await asyncComponent(`/src/app/assets/icons/game/${kebabCase(game.name)}.svg`) then src}
                <Image src={src} />
            {/await}
        </PrimaryAction>
    </Media>

    <Actions>
        <h4>
            {game.name}
        </h4>

        <ActionIcons>
            <IconButton
                class="p-0 text-black icon-button-primary"
                size="button"
            >
                <IconHeart class="text-1.25rem" />
            </IconButton>
        </ActionIcons>
    </Actions>
</Card>
