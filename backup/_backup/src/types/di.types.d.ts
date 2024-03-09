import type { UnknownCreator } from "brandi/lib/typings/types"

export type Binding = [
    token: Token<any>,
    instance: UnknownCreator<any>,
    scope?: "container" | "transient",
]

export type Injection = [
    instance: Binding["instance"],

    ...rest: Token<any>[],
]
