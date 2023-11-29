import type { GameRaw } from "~/mocks/types"
import type { DefineStore } from "~/types"
import type { StoreState } from "pinia"
import type { ComputedRef, Ref } from "vue"

import { Games } from "~/dto"
import { createCollection, createStore } from "~/factories"

export namespace GamesStore {
    export type Id = "gamesStore"

    export type State = StoreState<Getters>

    export type Getters = {
        games: () => Games
    }

    export type Actions = {
        setGamesRaw: (gamesRaw: GameRaw[]) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useGamesStore: GamesStore.Store = createStore<
    GamesStore.Id,
    GamesStore.State,
    GamesStore.Getters,
    GamesStore.Actions
>("gamesStore", (): GamesStore.Store => {
    let gamesRaw: Ref<GameRaw[]> = ref([])
    let games: ComputedRef<Games> = computed((): Games => createCollection(Games, getRef(gamesRaw)))

    function setGamesRaw(raw: GameRaw[]): void {
        setRef(gamesRaw, raw)
    }

    return {
        games,
        setGamesRaw,
    }
})
