import type { TCallable } from "~/shared/model"

export interface IGameSlideAction {
    handler: TCallable
    label: string
}
