import type { IGame as _IGame } from "$schema/api"

declare module "$schema/api" {
    interface IGame extends Omit<_IGame, "attributes" | "id"> {
        attributes?: IGameAttributes
        gid?: string
        id: string
    }

    type IGameAttributes = {
        description?: string
    }
}
