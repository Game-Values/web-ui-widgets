import type { Api } from "$schema/api"
import type { ICallable, ICallableLazy, IKeyOf, IValueOfRecord } from "$types"

import { LRUCache } from "lru-cache"

import { onClient } from "$lib/helpers"

type ICache = {
    api: Api<unknown>["api"]
}

type ICacheKey = IKeyOf<ICache>

type ICacheVal = IValueOfRecord<ICache>

type IUseCache<T> = {
    getCache(setter?: ICallable<T> | ICallableLazy<T>): Promise<T> | T | undefined
    setCache(val: ICacheVal): void
}

let lruCache: LRUCache<string, object> | undefined

onClient((): void => {
    lruCache = new LRUCache({
        max: 500,
        ttl: 1000 * 60 * 15, // 15 min
    })
})

export function useCache<T extends ICacheVal>(
    key: ICacheKey,
    defaultSetter?: ICallable<T> | ICallableLazy<T>,
): IUseCache<T> {
    let use: IUseCache<T> = {
        getCache: (
            setter: ICallable<T> | ICallableLazy<T> | undefined = defaultSetter,
        ): Promise<T> | T | undefined => {
            let cachedValue: T | undefined = lruCache?.get(key) as T | undefined

            if (cachedValue)
                return cachedValue

            let result: Promise<T> | T | undefined = setter?.()
            if (!result)
                return undefined

            if (result instanceof Promise)
                return result.then((val: T): T => {
                    use.setCache(val)

                    return val
                })

            use.setCache(result)

            return result
        },

        setCache: (val: ICacheVal): void => {
            lruCache?.set(key, val)
        },
    }

    return use
}
