<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { NavTab } from "$ui/navigation"

interface $$Props {
    class?: string
    links: IRouteWithLabel[]
    tabClass?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let links: IRouteWithLabel[]

let tabClass: string = ""

export {
    className as class,
    links,
    tabClass,
}
</script>

<nav class="join w-full {className}">
    {#each links as link (link.label)}
        <NavTab
            class="join-item flex-1 {tabClass}"
            {link}
        />
    {/each}
</nav>
