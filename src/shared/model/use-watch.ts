import type { ICallable, ICallableLazy } from "$types"
import type { Readable, Unsubscriber, Writable } from "svelte/store"

import { debounce } from "lodash-es"
import { onDestroy, onMount } from "svelte"
import { derived } from "svelte/store"

export function useWatch<T>(
    store: Readable<T> | Writable<T>,
    subscribe: ICallable | ICallableLazy,
): void {
    let unsubscribe: undefined | Unsubscriber

    onMount((): void => {
        unsubscribe = (
            derived(store, ($store: T): T => $store)
                .subscribe(debounce(subscribe))
        )
    })

    onDestroy((): void => unsubscribe?.())
}
