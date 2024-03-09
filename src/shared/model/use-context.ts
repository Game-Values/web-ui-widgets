import type { Readable, Writable } from "svelte/store"

import { mergeWith } from "lodash-es"
import { getContext, setContext } from "svelte"
import { derived, get, writable } from "svelte/store"

import { useRoute } from "$model"

type IUseContext<T> = {
    context: Readable<T>
    setContext(context: T): void
    updateContext(context: Partial<T>): void
}

function contextFactory<T>(contextKey: string): Writable<T> {
    return (
        getContext<undefined | Writable<T>>(contextKey) ||
        setContext<Writable<T>>(contextKey, writable<T>())
    )
}

export function useContext<T = unknown>(
    initialContext: Partial<T> = Object.create(null),
): IUseContext<T> {
    let { getRoute } = useRoute()

    let context: Writable<T> = contextFactory<T>(getRoute())

    let use: IUseContext<T> = {
        context: derived(context, ($context: T): T => $context),

        setContext: (newContext: T): void => context.set(newContext),

        updateContext: (updatedContext: Partial<T>): void => (
            context.set(
                // eslint-disable-next-line consistent-return
                mergeWith(get(use.context), updatedContext, (val: T, updatedVal: Partial<T>): any => {
                    if (Array.isArray(val))
                        return updatedVal
                }),
            )
        ),
    }

    use.updateContext(initialContext)

    return use
}
