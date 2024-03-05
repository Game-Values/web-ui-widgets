import type { IUser } from "$schema/api"
import type { IUserLayoutData } from "~/layouts"

export async function load({ locals, params }): Promise<IUserLayoutData> {
    let user: IUser = await locals.api.readUserApiV1UsersUsersUserIdGet(params.userId)

    return {
        user,
    }
}
