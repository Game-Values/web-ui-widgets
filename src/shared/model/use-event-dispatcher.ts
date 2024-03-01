import type { ICallable, ICallableLazy, IKeyOf } from "$types"
import type { MaybePromise } from "@sveltejs/kit"
import type { DebouncedFunc } from "lodash-es"
import type { EventDispatcher } from "svelte"

import { debounce, merge } from "lodash-es"
import { createEventDispatcher } from "svelte"

type IUseEvent<T> = {
    dispatchEvent: DebouncedFunc<(context?: T) => MaybePromise<any>>
}

type IEvents = IKeyOf<HTMLElementEventMap & {
    delete: any
    message: string
    search: string
    update: any
    visible: never
}>

// todo: fromEvent rxjs
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
