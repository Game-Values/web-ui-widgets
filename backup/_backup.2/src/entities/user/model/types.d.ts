import type { IUserRaw } from "@/schema/data-contracts"

export interface IUser extends Required<IUserRaw> {
    attributes: IUserAttributes
}

export interface IUserAttributes {

}
