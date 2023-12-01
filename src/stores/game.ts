import type { GameRaw } from "#schema/data-contracts"
import type { GameStore } from "~/types"

import { Game } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useGameStore: () => GameStore.Store = createStore<
    GameStore.Id,
    GameStore.State,
    GameStore.Getters,
    GameStore.Actions
>("gameStore", {
    actions: {
        setGameRaw(gameRaw: GameRaw): void {
            this.gameRaw = gameRaw
        },
    },

    getters: {
        game(): Game {
            return createModel(Game, this.gameRaw)
        },
    },

    state: (): GameStore.State => ({
        gameRaw: {},
    }),
})
