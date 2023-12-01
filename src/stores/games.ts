import type { GameRaw } from "#schema/data-contracts"
import type { GamesStore } from "~/types"

import { Games } from "~/dto"
import { createCollection, createStore } from "~/factories"

export let useGamesStore: () => GamesStore.Store = createStore<
    GamesStore.Id,
    GamesStore.State,
    GamesStore.Getters,
    GamesStore.Actions
>("gamesStore", {
    actions: {
        setGamesRaw(gamesRaw: GameRaw[]): void {
            this.gamesRaw = gamesRaw
        },
    },

    getters: {
        games(): Games {
            return createCollection(Games, this.gamesRaw)
        },
    },

    state: (): GamesStore.State => ({
        gamesRaw: [],
    }),
})
