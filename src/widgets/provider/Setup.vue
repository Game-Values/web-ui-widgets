<script lang="ts" setup>
import type { DIAbstract } from "~/abstract"
import type { Context } from "~/types"

import { Adapters, Clients, Controllers, Services } from "~/helpers"

interface Slots {
    default: () => any
}

defineSlots<Slots>()

useAssign<Context>(useContext(), {
    adapters: new Adapters(),
    clients: new Clients(),
    controllers: new Controllers(),
    services: new Services(),
})

let dis: DIAbstract[] = (
    useValues(
        usePick(
            useContext(),
            "adapters",
            "clients",
            "controllers",
            "services",
        ),
    )
)

dis.forEach((di: DIAbstract): void => di.updateTokens())
dis.forEach((di: DIAbstract): void => di.inject())
</script>

<template>
<slot />
</template>
