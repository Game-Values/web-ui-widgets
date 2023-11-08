export type Keyable<K extends string, V = any> = {
    [key: K]: V
}

export type Nullable<T> = null | T

export type ValueOf<T> = T[keyof T]
