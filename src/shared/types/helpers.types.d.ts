export type ICallable<T = void> = (...rest: any[]) => T

export type ICallableLazy<T = void> = ICallable<Promise<T>>

export type IKeyOf<T> = keyof T

export type ILayoutPromise<T extends Iterable<PromiseLike<T> | T>> = { layoutPromise: Promise<Awaited<T>[]> }

export type IModule<T> = { default: T }

export type INullable<T> = null | T

export type IPagePromise<T extends Iterable<PromiseLike<T> | T>> = { pagePromise: Promise<Awaited<T>[]> }

export type IValueOfEnum<T> = `${T}`

export type IValueOfRecord<T> = T[IKeyOf<T>]
