import type { IGame as _IGame } from "$schema/api"

declare module "$schema/api" {
    interface IGame extends _IGame {
        attributes?: IGameAttributes
        gid?: string
    }

    type IGameAttributes = {
        description?: string
    }
}
