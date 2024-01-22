<script lang="ts">
import type { IGame } from "~/shared/model"

import Button from "@smui/button"
import Card, { ActionIcons, Actions, Media, PrimaryAction } from "@smui/card"
import { Image } from "@smui/image-list"
import { kebabCase } from "lodash-es"

import { asyncModule } from "$lib"

function asyncGameIconSrc(gameName: string): Promise<string> {
    return asyncModule(`~/app/assets/icons/game/${kebabCase(gameName)}.svg`)
}

export let game: IGame
</script>

<Card>
    <Media class="bg-white/2 border border-solid border-white/15 rounded-xl">
        <PrimaryAction>
            <Button
                class="h-full button-default"
                href="/g/{game.id}"
            >
                {#await asyncGameIconSrc(game.name) then src}
                    <Image
                        class="h-36"
                        {src}
                    />
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
            <slot name="toggle-like" />
        </ActionIcons>
    </Actions>
</Card>
