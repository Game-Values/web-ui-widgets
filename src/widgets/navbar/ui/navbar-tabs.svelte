<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { NavbarTab } from "~/widgets/navbar"

interface $$Props {
    class?: string
}

let className: string = ""

let tabs: IRouteWithLabel[] = [
    {
        label: "Blog",
        url: "/blog",
    },
    {
        label: "Promotions",
        url: "/promotions",
    },
    {
        label: "Top-10",
        url: "/top-10",
    },
]

export {
    className as class,
}
</script>

<nav class="h-full">
    <ul
        class="
            tabs tabs-bordered
            h-[calc(100%+0.5rem*2)]
            items-center
            uppercase
            {className}
        "
        role="tablist"
    >
        {#each tabs as tab (tab.label)}
            <NavbarTab {tab} />
        {/each}
    </ul>
</nav>
