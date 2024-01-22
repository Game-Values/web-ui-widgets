import type { TCallable } from "~/shared/model"

export interface SlideAction {
    handler: TCallable
    label: string
}
