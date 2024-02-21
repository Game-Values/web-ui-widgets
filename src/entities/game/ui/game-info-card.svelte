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

<div class="card card-bordered backdrop-blur-2xl">
    <div class="card-body p-8 gap-y-8">
        <h1 class="card-title font-bold text-4xl items-center justify-between">
            {$context.game.name}

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
