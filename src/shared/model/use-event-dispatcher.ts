import type { ICallable, ICallableLazy, IKeyOf } from "$types"
import type { DebouncedFunc } from "lodash-es"
import type { EventDispatcher } from "svelte"

import { debounce, merge } from "lodash-es"
import { createEventDispatcher } from "svelte"

type IUseEvent<T> = {
    dispatchEvent: DebouncedFunc<(context?: T) => Promise<boolean>>
}

type IEvents = IKeyOf<HTMLElementEventMap & {
    search: string
    update: any
    visible: never
}>

export function useEventDispatcher<T = never>(
    event: IEvents,
    callback?: ICallable<T> | ICallableLazy<T>,
): IUseEvent<T> {
    let dispatchEvent: EventDispatcher<Record<string, unknown>> = createEventDispatcher()

    return {
        dispatchEvent: debounce(async (context?: any): Promise<boolean> => {
            let callbackContext: T = await new Promise((resolve: ICallable): Promise<void> | void => {
                let result: Promise<T> | T | undefined = callback?.()

                return (
                    result instanceof Promise
                        ? result.then(resolve)
                        : resolve()
                )
            })

            return dispatchEvent(event, merge(context, callbackContext).valueOf())
        }),
    }
}
