<script lang="ts">
import type { IGameDetailsPageContext } from "~/pages/game"

import { useContext } from "$model"

interface $$Slots {
    gameAddSection: NonNullable<unknown>
    gameCreateLot: NonNullable<unknown>
    gameLikeToggle: NonNullable<unknown>
    gameSections: NonNullable<unknown>
}

let { context } = useContext<IGameDetailsPageContext>()
</script>

<div class="card glass glass-2xl">
    <div class="card-body p-8 gap-y-8">
        <h1 class="card-title font-bold items-center justify-between">
            <span class="text-4xl">
                {$context.game.name}
            </span>

            <slot name="gameLikeToggle" />
        </h1>

        <p>
            {@html $context.game.attributes.description}
        </p>

        <div class="card-actions flex-nowrap justify-between">
            <div class="flex-auto">
                <slot name="gameSections" />
            </div>

            <div class="gap-y-2 flex flex-col">
                <slot name="gameAddSection" />

                <slot name="gameCreateLot" />
            </div>
        </div>
    </div>
</div>
