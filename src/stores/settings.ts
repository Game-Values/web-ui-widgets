import type { UserUpdateRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"
import type { StoreActions } from "pinia"

import { createStore } from "~/factories"

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

// todo: composable store
export let useSettingsStore: (storeId?: string) => SettingsStore.Store = createStore<
    SettingsStore.Id,
    SettingsStore.State,
    SettingsStore.Getters,
    SettingsStore.Actions
>("settingsStore", {
    getters: {
        settings(): UserUpdateRaw {
            return usePick(this.settingsRaw, [
                "email",
                "full_name",
                "password",
            ])
        },
    },

    state: (): SettingsStore.State => {
        let { storeClient } = useClients()

        return {
            settingsRaw: useAssign(
                usePick(storeClient.userMeStore.userRaw, [
                    "email",
                    "full_name",
                ]),
                {
                    oldPassword: "",
                    password: "",
                    repeatPassword: "",
                },
            ),
        }
    },
})
