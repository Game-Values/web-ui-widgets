import type { ICallable, ICallableLazy, IKeyOf } from "$types"
import type { EventDispatcher } from "svelte"

import { isFunction, isString } from "lodash-es"
import { createEventDispatcher } from "svelte"

export function forwardEvent(event?: IKeyOf<HTMLElementEventMap>): ICallable
export function forwardEvent(
    callbackOrEvent?: ICallable | ICallableLazy | IKeyOf<HTMLElementEventMap>,
    event?: IKeyOf<HTMLElementEventMap>,
): ICallable {
    let callback: ICallable | ICallableLazy = (
        isFunction(callbackOrEvent)
            ? callbackOrEvent
            : (e: CustomEvent): CustomEvent => e
    )

    let dispatch: EventDispatcher<Record<string, unknown>> = createEventDispatcher()

    let forward: ICallableLazy<boolean | void> = async (e: CustomEvent): Promise<boolean> => {
        let promise: Promise<void> = new Promise((resolve: ICallable): void => {
            let result: Promise<void> | void = callback(e)
            if (result instanceof Promise)
                result.then(resolve)
            else
                resolve()
        })

        await promise

        let eventName: IKeyOf<HTMLElementEventMap> = (
            event || (isString(callback) ? callback : e.type)
        ) as IKeyOf<HTMLElementEventMap>

        return dispatch(eventName, e.detail)
    }

    return function (e: CustomEvent): Promise<boolean | void> {
        return forward(e)
    }
}
