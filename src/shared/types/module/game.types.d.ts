import type { IGame as _IGame } from "$schema/api"

declare module "$schema/api" {
    interface IGame extends _IGame {
        gid?: string
    }
}
