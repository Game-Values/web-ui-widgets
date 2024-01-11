<script lang="ts">
import type { IGame } from "~/entities/game"

import Card, { Actions, ActionIcons, Media, PrimaryAction } from "@smui/card"
import Button from "@smui/button"
import IconButton from "@smui/icon-button";
import { Image } from "@smui/image-list"
import { kebabCase } from "lodash-es"

import { asyncComponent } from "~/shared/lib"
import IconHeart from "~icons/heroicons/heart"

export let game: IGame
</script>

<Card>
    <Media class="bg-white/2 border border-solid border-white/15 rounded-xl">
        <PrimaryAction>
            <Button
                class="h-full button-default"
                href="/g/{game.id}"
            >
                {#await asyncComponent(`/src/app/assets/icons/game/${kebabCase(game.name)}.svg`) then src}
                    <Image {src} />
                {/await}
            </Button>
        </PrimaryAction>
    </Media>

    <Actions>
        <h4>
            <Button
                class="button-link"
                href="/g/{game.id}"
            >
                {game.name}
            </Button>
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
