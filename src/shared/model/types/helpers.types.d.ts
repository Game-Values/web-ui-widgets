export type TCallable<T = void> = (...rest: unknown[]) => T

export type TCallableLazy<T = void> = TCallable<Promise<T>>

export type TModule<T> = {
    default: T
}
