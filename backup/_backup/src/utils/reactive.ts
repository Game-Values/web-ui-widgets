import type { MaybeRef, Ref } from "vue"

import { get, set } from "@vueuse/core"

export function getRef<T>(ref: MaybeRef<T>): T
export function getRef<T, K extends keyof T>(ref: MaybeRef<T>, key: K): T[K]
export function getRef<T, K extends keyof T>(val: MaybeRef<T>, key?: K): T | T[K] {
    if (key)
        return get<T, K>(val, key)

    return get<T>(val)
}

export function setRef<T>(ref: Ref<T>, val: T): void
export function setRef<T extends object, K extends keyof T>(target: T, key: K, val: T[K]): void

export function setRef<T extends object, K extends keyof T>(
    target: MaybeRef<T>,
    valOrKey: K | T,
    val?: T[K],
): void {
    if (isRef(target))
        return set(target, valOrKey)

    return set(target, valOrKey as K, val!)
}
