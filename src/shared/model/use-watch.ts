import type { ICallable, ICallableLazy } from "$types"
import type { Writable } from "svelte/store"

import { debounce } from "lodash-es"
import { onDestroy, onMount } from "svelte"
import { derived } from "svelte/store"

import { DEBOUNCE_TIMEOUT } from "$lib/consts"

export function useWatch<T extends object>(store: Writable<T>, subscribe: ICallable | ICallableLazy): void {
    let unsubscribe: ICallable | undefined

    onMount((): void => {
        unsubscribe = (
            derived(store, ($store: T): T => $store)
                .subscribe(debounce(subscribe, DEBOUNCE_TIMEOUT))
        )
    })

    onDestroy((): void => unsubscribe?.())
}
