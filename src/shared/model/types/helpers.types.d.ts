export type Callable<T = void> = () => T

export type CallableLazy<T = void> = Callable<Promise<T>>

export type Module<T> = {
    default: T
}
