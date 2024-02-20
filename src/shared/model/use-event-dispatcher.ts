import type { ICallable, ICallableLazy, IKeyOf } from "$types"
import type { EventDispatcher } from "svelte"

import { merge } from "lodash-es"
import { createEventDispatcher } from "svelte"

type IUseEvent<T> = {
    dispatchEvent(context?: T): Promise<boolean>
}

type IEvents = IKeyOf<HTMLElementEventMap & {
    search: string
    update: any
}>

export function useEventDispatcher<T = never>(
    event: IEvents,
    callback?: ICallable<T> | ICallableLazy<T>,
): IUseEvent<T> {
    let dispatchEvent: EventDispatcher<Record<string, unknown>> = createEventDispatcher()

    return {
        dispatchEvent: async (context?: any): Promise<boolean> => {
            let callbackContext: T = await new Promise((resolve: ICallable): Promise<void> | void => {
                let result: Promise<T> | T | undefined = callback?.()

                return (
                    result instanceof Promise
                        ? result.then(resolve)
                        : resolve()
                )
            })

            return dispatchEvent(event, merge(context, callbackContext))
        },
    }
}
