import type { IUser } from "~/entities/user"

import { api } from "~/shared/api"

export function fetchUser(userId: string): Promise<IUser> {
    return api.readUserApiV1UsersUsersUserIdGet(userId) as Promise<IUser>
}
