import type {
    GameRaw,
    ItemRaw,
    UserRaw,
    UserUpdateRaw,
} from "#schema/data-contracts"
import type { Game, Games, Item, Items, User } from "~/dto"
import type { ItemType, OrderStep } from "~/enums"
import type {
    _ActionsTree,
    _GettersTree,
    Store as _Store,
    StateTree,
    StoreActions,
} from "pinia"

export type DefineStore<
    Id extends string,
    State extends StateTree,
    Getters extends _GettersTree<State>,
    Actions extends _ActionsTree,
> = _Store<
    Id,
    State,
    Getters,
    Actions
>

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

export namespace ItemStore {
    export type Id = "itemStore"

    export type State = {
        itemRaw: ItemRaw
    }

    export type Getters = {
        item: () => Item
    }

    export type Actions = {
        setItemRaw: (itemRaw: ItemRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace ItemsStore {
    export type Id = "itemsStore"

    export type State = {
        itemsRaw: ItemRaw[]
    }

    export type Getters = {
        items: () => Items
    }

    export type Actions = {
        setItemsRaw: (itemsRaw: ItemRaw[]) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace OrderStore {
    export type Id = "orderStore"

    export type State = {
        orderStep: OrderStep
        orderSteps: OrderStep[]
        itemType: ItemType // todo
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
        saleRaw: Pick<Item, (
            "attributes" |
            "gid" |
            "name"
        )>
    }

    export type Getters = {
        sale: () => Item
    }

    export type Actions = StoreActions<never>

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace SettingsStore {
    export type Id = "settingsStore"

    export type State = {
        settingsRaw: UserUpdateRaw & {
            oldPassword: string
            password: string
            repeatPassword: string
        }
    }

    export type Getters = {
        settings: () => UserUpdateRaw
    }

    export type Actions = StoreActions<never>

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export namespace UserStore {
    export type Id = "userStore"

    export type State = {
        userRaw: UserRaw
    }

    export type Getters = {
        authenticated: () => boolean
        user: () => User
    }

    export type Actions = {
        setUserRaw: (userRaw: UserRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}
