import type { Currency } from "$lib/enums"
import type {
    IGame as IGameRaw,
    IItemAttributes as IItemAttributesRaw,
    IItem as IItemRaw,
    IItemCreate as IItemCreateRaw,
} from "$schema/api"

declare module "$schema/api" {
    interface IGame extends Omit<IGameRaw, "attributes" | "id"> {
        attributes: IGameAttributes
        gid?: string
        id: string
    }

    type IGameAttributes = {
        description?: string
    }

    interface IItem extends Omit<IItemRaw, "attributes"> {
        attributes: IItemAttributes
    }

    interface IItemCreate extends Omit<IItemCreateRaw, "attributes"> {
        attributes: IItemAttributes
        gname?: string
    }

    type IItemAttributes = IItemAttributesRaw & {
        currency: Currency
        game: string
        price: number
    }
}
