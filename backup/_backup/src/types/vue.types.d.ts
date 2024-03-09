import type { AsyncComponentLoader, AsyncComponentOptions, Component } from "vue"

export type AsyncComponent = (
    // todo: typing
    any |
    AsyncComponentLoader<Component> |
    AsyncComponentOptions<Component>
)

export type ScopedProps<T = object> = T
