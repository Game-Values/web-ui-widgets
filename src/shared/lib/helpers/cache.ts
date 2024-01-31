import type { ICallable, ICallableLazy } from "$types"

import { LRUCache } from "lru-cache"

let cache: LRUCache<string, object> = new LRUCache({
    max: 500,
    ttl: 1000 * 60 * 5,
})

export async function fromCache<T>(
    key: string,
    setCallback: ICallableLazy<T>,
): Promise<T> {
    if (!cache.has(key))
        cache.set(key, (await setCallback()) as never)

    return await cache.fetch(key) as T
}

export function fromCacheSync<T>(
    key: string,
    setCallback: ICallable<T>,
): T {
    if (!cache.has(key))
        cache.set(key, setCallback() as never)

    return cache.get(key) as T
}
