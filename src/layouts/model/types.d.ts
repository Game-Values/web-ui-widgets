import type { IUser } from "$schema/api"
import type { ISession } from "$types"

export type IDefaultLayoutData = {
    session: ISession
}

export type IUserLayoutData = {
    user: IUser
}
