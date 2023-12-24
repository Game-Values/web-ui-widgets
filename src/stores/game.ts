import type { GameRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { Game } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace GameStore {
    export type Id = "gameStore"

    export type State = {
        gameRaw: GameRaw
    }

    export type Getters = {
        game: () => Game
    }

    export type Actions = {
        setGameRaw: (gameRaw: GameRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useGameStore: (storeId?: string) => GameStore.Store = createStore<
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
