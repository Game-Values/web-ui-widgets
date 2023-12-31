import type { IUserRaw } from "@/schema/data-contracts"
import type { IUser } from "~/entities/user"
import type { UnwrapRef } from "vue"

import { api } from "~/shared/api"
import { refreshObject } from "~/shared/lib"

export let useUserModel = defineStore("userModel", () => {
    let user: UnwrapRef<IUser> = reactive(Object.create(null))

    async function fetchUser(userId: string): Promise<void> {
        let userRaw: IUserRaw = await api.readUserApiV1UsersUsersUserIdGet(userId)
        refreshObject(userRaw, userRaw)
    }

    return {
        fetchUser,
        user,
    }
})
