import type { Callable } from "~/types"

export function isClient(): boolean {
    return !isServer()
}

export function isServer(): boolean {
    return Boolean(process.server)
}

export function onClientOnly<T = any>(callback: () => T, fallback?: () => T): T | undefined {
    return isClient() ? callback() : fallback?.()
}

export function onceClientOnly(fn: Callable<any>): Callable<any> {
    if (isClient())
        return useOnce(fn)

    return fn
}
