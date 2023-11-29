import type { GameRaw } from "#schema/data-contracts"
import type { GameStore } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { Game } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useGameStore: GameStore.Store = createStore<
    GameStore.Id,
    GameStore.State,
    GameStore.Getters,
    GameStore.Actions
>("gameStore", (): GameStore.Store => {
    let gameRaw: Ref<GameRaw> = ref({})
    let game: ComputedRef<Game> = computed((): Game => createModel(Game, getRef(gameRaw)))

    function setGameRaw(raw: GameRaw): void {
        setRef(gameRaw, raw)
    }

    return {
        game,
        setGameRaw,
    }
})
