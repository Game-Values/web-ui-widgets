<script lang="ts" setup>
import type { DIAbstract } from "~/abstract"
import type { Context } from "~/types"
import type { Token } from "brandi"
import type { VNode } from "vue"

import { Container } from "brandi"

import { Adapters, Clients, Controllers, Facades, Services } from "~/helpers"

defineSlots<{
    default: () => VNode
}>()

let container: Container = new Container()
let tokens: Map<string, Token<any>> = new Map()

let dis: Record<string, DIAbstract> = {
    adapters: new Adapters(container, tokens),
    clients: new Clients(container, tokens),
    controllers: new Controllers(container, tokens),
    facades: new Facades(container, tokens),
    services: new Services(container, tokens),
}

useAssign<Context>(useContext(), dis)
useForObj(dis, (di: DIAbstract): void => di.updateTokens())
useForObj(dis, (di: DIAbstract): void => di.inject())
</script>

<template>
<slot />
</template>