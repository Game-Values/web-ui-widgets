import type { IUserRaw } from "~/shared/api"

export interface IUser extends Required<IUserRaw> {
    attributes: IUserAttributes
}

export interface IUserAttributes {
    // todo: (?)
}
