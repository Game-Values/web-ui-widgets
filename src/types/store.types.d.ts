import type { GameRaw, ItemRaw, UserRaw } from "#schema/data-contracts"
import type { Game, Games, Item, User } from "~/dto"
import type { ItemType, OrderStep } from "~/enums"
import type {
    _ActionsTree,
    _GettersTree,
    Store as _Store,
    StateTree,
    StoreState,
} from "pinia"
import type { UnwrapRef } from "vue"

export type DefineStore<
    Id extends string,
    State extends StateTree,
    Getters extends _GettersTree<State>,
    Actions extends _ActionsTree,
> = _Store<Id, State, Getters, Actions>

export namespace GamesStore {
    export type Id = "gamesStore"

    export type State = StoreState<Getters>

    export type Getters = {
        games: () => Games
    }

    export type Actions = {
        setGamesRaw: (raw: GameRaw[]) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace GameStore {
    export type Id = "gameStore"

    export type State = StoreState<Getters>

    export type Getters = {
        game: () => Game
    }

    export type Actions = {
        setGameRaw: (raw: GameRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace ItemStore {
    export type Id = "saleStore"

    export type State = StoreState<Getters>

    export type Getters = {
        item: () => Item
    }

    export type Actions = {
        setItemRaw: (raw: ItemRaw) => void
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
        orderType: ItemType // todo
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

export namespace SaleStore {
    export type Id = "saleStore"

    export type State = {
        saleForm: UnwrapRef<
            Pick<Item, (
                "attributes" |
                "gid" |
                "name"
            )>
        >
    }

    export type Getters = ItemStore.Getters

    export type Actions = {

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
        setUserRaw: (raw: UserRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}
