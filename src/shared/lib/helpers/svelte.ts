import type { ICallable, ICallableLazy, INullable } from "$types"
import type { EventDispatcher } from "svelte"

import { createEventDispatcher } from "svelte"

export function forwardEvent(
    callback: INullable<ICallable | ICallableLazy> = null,
    eventName?: string,
): ICallable {
    let dispatch: EventDispatcher<Record<string, unknown>> = createEventDispatcher()

    let forward: ICallableLazy<boolean | void> = async (e: CustomEvent): Promise<boolean> => {
        let promise: Promise<void> = new Promise((resolve: ICallable): void => {
            let result: Promise<void> | void = callback?.(e)
            if (result instanceof Promise)
                result.then(resolve)
            else
                resolve()
        })

        await promise

        return dispatch(eventName || e.type, e.detail)
    }

    return function (e: CustomEvent): Promise<boolean | void> {
        return forward(e)
    }
}
