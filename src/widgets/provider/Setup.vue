<script lang="ts" setup>
import type { DIAbstract } from "~/abstract"
import type { ScopedProps } from "~/types"
import type { Token } from "brandi"
import type { VNode } from "vue"

import { Container } from "brandi"

import { Adapters, Clients, Controllers, Facades, Modals, Services } from "~/helpers"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let container: Container = new Container()
let tokens: Map<string, Token<any>> = new Map()

let dis: Record<string, DIAbstract> = {
    adapters: new Adapters(container, tokens),
    clients: new Clients(container, tokens),
    controllers: new Controllers(container, tokens),
    facades: new Facades(container, tokens),
    modals: new Modals(container, tokens),
    services: new Services(container, tokens),
}

useAssign(useContext(), dis)

useForEach(dis, (di: DIAbstract): void => di.updateTokens())
useForEach(dis, (di: DIAbstract): void => di.inject())
</script>

<template>
<slot />
</template>
