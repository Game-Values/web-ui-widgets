<script lang="ts">
import type { IRouteWithLabel } from "$types"

interface $$Props {
    class?: string
}

interface $$Slots {
    default: { tab: IRouteWithLabel }
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
        <slot {tab} />
    {/each}
</ul>
