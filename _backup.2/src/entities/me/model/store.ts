import type { IUserRaw } from "@/schema/data-contracts"
import type { IUser } from "~/entities/user"
import type { UnwrapRef } from "vue"

import { api } from "~/shared/httpInstance"
import { refreshObject } from "~/shared/lib"

export let useMeModel = defineStore("meModel", () => {
    let me: UnwrapRef<IUser> = reactive(Object.create(null))

    async function fetchMe(): Promise<void> {
        let meRaw: IUserRaw = await api.readUserApiV1UsersGet()
        refreshObject(me, meRaw)
    }

    return {
        fetchMe,
        me,
    }
})
