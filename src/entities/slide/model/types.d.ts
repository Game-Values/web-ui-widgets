import type { Callable } from "~/shared/model"

export interface SlideAction {
    handler: Callable
    label: string
}
