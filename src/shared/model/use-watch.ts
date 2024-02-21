import type { ICallable, ICallableLazy } from "$types"
import type { Readable, Writable } from "svelte/store"

import { debounce } from "lodash-es"
import { onDestroy, onMount } from "svelte"
import { derived } from "svelte/store"

export function useWatch<T extends object>(
    store: Readable<T> | Writable<T>,
    subscribe: ICallable | ICallableLazy,
): void {
    let unsubscribe: ICallable | undefined

    onMount((): void => {
        unsubscribe = (
            derived(store, ($store: T): T => $store)
                .subscribe(debounce(subscribe))
        )
    })

    onDestroy((): void => unsubscribe?.())
}
