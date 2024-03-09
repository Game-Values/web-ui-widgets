import type { TCallable } from "~/shared/lib"

export interface SlideAction {
    handler: TCallable
    label: string
}
