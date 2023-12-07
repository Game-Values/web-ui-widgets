// todo: mv all ()=><T> to Callable<T>
export type Callable<T = void> = () => T

export type Keyable<K extends string, V = any> = {
    [key: K]: V
}

export type Lazy<T = void> = Callable<Promise<T>>

export type MaybeCallable<T> = Callable<T> | T

export type Module<T> = {
    default: T
}

export type Nullable<T> = null | T

export type ValueOf<T> = T[keyof T]

export type ValueOfArray<T, K = number> = T[K]

// todo: rest
export type CombineKeys<
    K_1 extends string,
    K_2 extends string,
> = `${K_1}${Capitalize<K_2>}`
