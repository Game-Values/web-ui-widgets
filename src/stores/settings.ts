import type { UserUpdateRaw } from "#schema/data-contracts"
import type { SettingsStore } from "~/types"

import { createStore } from "~/factories"

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
