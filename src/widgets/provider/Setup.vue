<script lang="ts" setup>
import type { DIAbstract } from "~/abstract"
import type { Callable, Context, ScopedProps } from "~/types"
import type { Token } from "brandi"
import type { VNode } from "vue"

import { Container } from "brandi"
import { createConsola } from "consola"

import { Adapters, Clients, Confirms, Controllers, Facades, Modals, Toasts } from "~/helpers"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let container: Container = new Container()
let tokens: Map<string, Token<any>> = new Map()

// todo: (?)
let dis: Record<string, DIAbstract> = {
    adapters: new Adapters(container, tokens),
    clients: new Clients(container, tokens),
    confirms: new Confirms(container, tokens),
    controllers: new Controllers(container, tokens),
    facades: new Facades(container, tokens),
    modals: new Modals(container, tokens),
    toasts: new Toasts(container, tokens),
}

useAssign<Context, Record<string, DIAbstract>>(useContext(), dis)
useAssign<Context, { logger: Context["logger"] }>(useContext(), {
    logger: (
        useContext().logger || createConsola({
            formatOptions: {
                colors: true,
                date: true,
                fancy: true,
            },
        })
    ),
})

let updateTokensPromises: Promise<void>[] = useMap(dis, (di: DIAbstract): Promise<void> => (
    new Promise((resolve: Callable): void => {
        di.updateTokens()
        resolve()
    })
))

let injectTokensPromises: Promise<void>[] = useMap(dis, (di: DIAbstract): Promise<void> => (
    new Promise((resolve: Callable): void => {
        di.inject()
        resolve()
    })
))

await Promise.all(updateTokensPromises)
await Promise.all(injectTokensPromises)
</script>

<template>
<slot />
</template>
