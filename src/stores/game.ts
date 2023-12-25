import type { GameRaw } from "#schema/data-contracts"
import type { Section } from "~/dto"
import type { GameSection } from "~/enums"
import type { DefineStore, GameSectionsRaw } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { Game } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace GameStore {
    export type Id = "gameStore"

    export type State = {
        gameRaw: GameRaw
        gameSectionsRaw: GameSectionsRaw
    }

    export type Getters = {
        game: () => Game
    }

    export type Actions = {
        setGameRaw: (gameRaw: GameRaw) => void
        setGameSectionsRaw: (gameSectionsRaw: GameSectionsRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useGameStore: (storeId?: string) => GameStore.Store = createStore<
    GameStore.Id,
    GameStore.State,
    GameStore.Getters,
    GameStore.Actions
>("gameStore", () => {
    let { storeClient } = useClients()

    let { facets } = storeToRefs(storeClient.facetsStore)

    let gameRaw: Ref<GameRaw> = ref(Object.create(null))
    let gameSectionsRaw: Ref<GameSectionsRaw> = ref(Object.create(null))

    let game: ComputedRef<Game> = computed((): Game => (
        createModel(Game, (
            useMerge(getRef(gameRaw), {
                attributes: {
                    sections: useMap(useKeys(getRef(facets)), (gameSection: GameSection): Pick<Section, "count" | "name"> => (
                        {
                            count: storeClient.facetsStore.getFacetsCount(gameSection),
                            name: gameSection,
                        }
                    )),
                },
            })
        ))
    ))

    function setGameRaw(_gameRaw: GameRaw): void {
        setRef(gameRaw, _gameRaw)
    }

    function setGameSectionsRaw(_gameSectionsRaw: GameSectionsRaw): void {
        setRef(gameSectionsRaw, _gameSectionsRaw)
    }

    return {
        game,
        gameRaw,
        gameSectionsRaw,
        setGameRaw,
        setGameSectionsRaw,
    }
})
