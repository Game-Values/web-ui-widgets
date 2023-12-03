import type { ValueOf } from "~/types"

export function assignDeepKeysAsCamelCase<
    T extends object,
    V extends object,
>(target: T, ...deepKeys: string[]): T & V {
    let result: Partial<T> = target

    useForEach(deepKeys, (key: string): T => (
        Object.defineProperty(target, useCamelCase(key), {
            get: (): ValueOf<V> => useGet(target, key),
        })
    ))

    return result as T & V
}

export function cleanObject<T = object>(
    queryParams: any,
    predicate: (value: any) => any = useIdentity,
): T {
    return usePickBy<T>(queryParams, predicate) as T
}
