import type { GameRaw } from "~/mocks/types"
import type { GamesStore } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { Games } from "~/dto"
import { createCollection, createStore } from "~/factories"

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
