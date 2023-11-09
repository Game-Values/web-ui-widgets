export type Callable<T> = () => T

export type Keyable<K extends string, V = any> = {
    [key: K]: V
}

export type MaybeCallable<T> = Callable<T> | T

export type Module<T> = {
    default: T
}

export type Nullable<T> = null | T

export type ValueOf<T> = T[keyof T]
