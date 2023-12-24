import type { GameRaw } from "#schema/data-contracts"
import type { GameSection } from "~/enums"
import type { DefineStore, GameSectionsRaw } from "~/types"

import { Game, GameSubsection } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace GameStore {
    export type Id = "gameStore"

    export type State = {
        gameRaw: GameRaw
        gameSectionsRaw: GameSectionsRaw
    }

    export type Getters = {
        game: () => Game
        getGameSection: () => (section: GameSection) => GameSubsection
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
>("gameStore", {
    actions: {
        setGameRaw(gameRaw: GameRaw): void {
            this.gameRaw = gameRaw
        },

        setGameSectionsRaw(gameSectionsRaw: GameSectionsRaw): void {
            this.gameSectionsRaw = gameSectionsRaw
        },
    },

    getters: {
        game(): Game {
            return createModel(Game, this.gameRaw)
        },

        getGameSection(): (section: GameSection) => GameSubsection {
            return (section: GameSection): GameSubsection => (
                createModel(GameSubsection, useGet(this.gameSectionsRaw, section, {}))
            )
        },
    },

    state: (): GameStore.State => ({
        gameRaw: {},
        gameSectionsRaw: {} as never,
    }),
})
