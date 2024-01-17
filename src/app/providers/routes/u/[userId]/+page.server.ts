import type { IUser } from "~/entities/user"
import type { IProfilePageData } from "~/pages/profile"

import { fetchUser } from "~/entities/user"

export async function load({ params }): Promise<IProfilePageData> {
    let user: IUser = await fetchUser(params.userId)

    return {
        user,
    }
}
