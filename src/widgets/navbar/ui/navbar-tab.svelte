<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { useRoute } from "$model"

let tab: IRouteWithLabel

let { route, routeActive } = useRoute(tab.url)

export {
    tab,
}
</script>

<li
    class="tab h-full p-0"
    class:tab-active={$routeActive}
    role="tab"
>
    <a
        class="btn btn-link"
        href={$route}
    >
        {tab.label}
    </a>
</li>

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

.tab.tab-active {
    @apply border-primary;
}
</style>
