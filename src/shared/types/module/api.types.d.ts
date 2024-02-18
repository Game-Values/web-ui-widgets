import type { Currency } from "$lib/enums"
import type {
    IGame as IGameRaw,
    IItemAttributes as IItemAttributesRaw,
    IItem as IItemRaw,
} from "$schema/api"

declare module "$schema/api" {
    interface IGame extends Omit<IGameRaw, "attributes" | "id"> {
        attributes: IGameAttributes
        gid?: string
        id: string
        sections: string[]
    }

    type IGameAttributes = {
        description?: string
    }

    interface IItem extends Omit<IItemRaw, "attributes"> {
        attributes: IItemAttributes
    }

    type IItemAttributes = IItemAttributesRaw & {
        currency: Currency
        price: number
    }
}
