import type { TCallable, TCallableLazy } from "~/shared/lib"
import type { EventDispatcher } from "svelte"

import { createEventDispatcher } from "svelte"

export function withForwardEvent(callback: TCallable | TCallableLazy): TCallable {
    let dispatch: EventDispatcher<Record<string, unknown>> = createEventDispatcher()

    let forwardEvent: TCallableLazy<boolean | void> = (e: CustomEvent) => {
        let promise: Promise<void> = new Promise((resolve: TCallable): void => {
            let result: Promise<void> | void = callback(e)
            if (result instanceof Promise)
                result.then(resolve)
            else
                resolve()
        })

        return promise.then(() => dispatch(e.type, e.detail))
    }

    return function (e: CustomEvent): Promise<boolean | void> {
        return forwardEvent(e)
    }
}
