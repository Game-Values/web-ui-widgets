import type { Currency } from "$lib/enums"
import type {
    IGame as IGameRaw,
    IItemAttributes as IItemAttributesRaw,
    IItemCreate as IItemCreateRaw,
    IItem as IItemRaw,
} from "$schema/api"

declare module "$schema/api" {
    export interface IGame extends Omit<IGameRaw, "attributes" | "id"> {
        attributes: IGameAttributes
        gid?: string
        id: string
    }

    export interface IItem extends Omit<IItemRaw, "attributes"> {
        attributes: IItemAttributes
    }

    export interface IItemCreate extends Omit<IItemCreateRaw, "attributes"> {
        attributes: IItemAttributes
        gname?: string
    }

    export type IGameAttributes = {
        description: string
    }

    export type IItemAttributes = IItemAttributesRaw & {
        currency: Currency
        game: string
        price: number
    }
}
