export type ICallable<T = void> = (...rest: any[]) => T

export type ICallableLazy<T = void> = ICallable<Promise<T>>

export type IModule<T> = {
    default: T
}

export type INullable<T> = null | T

export type IValueOf<T> = T[keyof T]
