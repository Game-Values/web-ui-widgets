import type { TCallable } from "~/shared/lib"

export interface IGameSlideAction {
    handler: TCallable
    label: string
}
