import type { AsyncComponentLoader, AsyncComponentOptions, Component } from "vue"

export type AsyncComponent = (
    AsyncComponentLoader<Component> |
    AsyncComponentOptions<Component> |

    // todo: typing
    any
)

export type ScopedProps<T = object> = T
