import type { ICallableLazy } from "$types"
import type { UseQueryStoreResult } from "@sveltestack/svelte-query"

import { useQuery as _useQuery } from "@sveltestack/svelte-query"
import hashSum from "hash-sum"

type IUseQuery<T> = {
    query: UseQueryStoreResult<T, any>
}

export function useQuery<T>(fn: ICallableLazy<T>, ...rest: any[]): IUseQuery<T> {
    return {
        query: _useQuery<T>(hashSum(rest), (): Promise<T> => fn(...rest)),
    }
}
