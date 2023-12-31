import type { GameRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { Games } from "~/dto"
import { createCollection, createStore } from "~/factories"

export namespace GamesStore {
    export type Id = "gamesStore"

    export type State = {
        gamesRaw: GameRaw[]
    }

    export type Getters = {
        games: () => Games
    }

    export type Actions = {
        setGamesRaw: (gamesRaw: GameRaw[]) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useGamesStore: (storeId?: string) => GamesStore.Store = createStore<
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
