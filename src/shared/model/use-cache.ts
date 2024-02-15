import type { Api } from "$schema/api"
import type { ICallable, IKeyOf, IValueOfRecord } from "$types"

import { LRUCache } from "lru-cache"

import { onClient } from "$lib/helpers"

type ICache = {
    api: Api<unknown>["api"]
}

type ICacheKey = IKeyOf<ICache>

type ICacheVal = IValueOfRecord<ICache>

type IUseCache = {
    getCache<T extends ICacheVal>(): T
    setCache(val: ICacheVal): void
}

let lruCache: LRUCache<string, object> | undefined

onClient((): void => {
    lruCache = new LRUCache({ max: 500, ttl: 1000 * 60 * 5 })
})

export function useCache(key: ICacheKey, defaultSetter?: ICallable<ICacheVal>): IUseCache {
    let use: IUseCache = {
        getCache: <T extends ICacheVal>(
            setter: ICallable<ICacheVal> | undefined = defaultSetter,
        ): T => {
            if (!lruCache?.has(key) && setter)
                use.setCache(setter())

            return (
                lruCache?.get(key) ||
                setter?.()
            ) as T
        },

        setCache: (val: ICacheVal): void => {
            lruCache?.set(key, val)
        },
    }

    return use
}
