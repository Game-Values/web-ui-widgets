import type { UserRaw } from "#schema/data-contracts"
import type { Games, User } from "~/dto"
import type { OrderStep, OrderType } from "~/enums"
import type { GameRaw } from "~/mocks/types"
import type { DefineStoreOptions, StoreActions, StoreGeneric, StoreGetters, StoreState } from "pinia"

export type DefineStore<
    Id extends string,
    State extends StoreState<any>,
    Getters extends StoreGetters<any>,
    Actions extends StoreActions<any>,
> = (
    Omit<
        DefineStoreOptions<
            Id,
            State,
            Getters,
            Actions
        >,

        "id"
    > |

    StoreGeneric<
        Id,
        State,
        Getters,
        Actions
    >
)

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

export namespace MeStore {
    export type Id = "meStore"

    export type State = UserStore.State

    export type Getters = UserStore.Getters & {
        authenticated: boolean
    }

    export type Actions = UserStore.Actions

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace OrderStore {
    export type Id = "orderStore"

    export type State = {
        orderStep: OrderStep
        orderSteps: OrderStep[]
        orderType: OrderType
    }

    export type Getters = {
        orderStepIndex: () => number
    }

    export type Actions = {
        nextOrderStep: () => void
        prevOrderStep: () => void
        setOrderStep: (orderStep: OrderStep) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace UserStore {
    export type Id = "userStore"

    export type State = StoreState<Getters>

    export type Getters = {
        user: () => User
    }

    export type Actions = {
        setUserRaw: (userRaw: UserRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}
