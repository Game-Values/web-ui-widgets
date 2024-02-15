<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { isActiveRoute } from "$lib/helpers"
import { route } from "$schema/routes"

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
</script>

<ul
    class="
        tabs tabs-bordered
        h-[calc(100%+0.5rem*2)] items-center
        font-bold uppercase
    "
    role="tablist"
>
    {#each tabs as tab (tab.label)}
        <li
            class="tab h-full p-0"
            class:tab-active={$isActiveRoute(tab.url)}
            role="tab"
        >
            <a
                class="btn btn-link"
                href={route(tab.url)}
            >
                {tab.label}
            </a>
        </li>
    {/each}
</ul>

<style>
.btn-link {
    @apply px-[var(--tab-padding)];
    @apply h-full;
}

.tab:not(.tab-active) {
    @apply border-transparent;
}

.tab:not(.tab-active) .btn-link {
    @apply text-secondary;
}

.tab.tab-active .btn-link {
    @apply text-primary;
}

.tab.tab-active:not(.tab-disabled):not([disabled]) {
    @apply border-primary;
}
</style>
