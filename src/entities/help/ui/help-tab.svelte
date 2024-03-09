<script lang="ts">
import type { IRouteWithLabelAndIcon } from "$types"

import { useRoute } from "$model"

interface $$Props {
    link: IRouteWithLabelAndIcon
}

let link: IRouteWithLabelAndIcon

let { route, routeActive } = useRoute(link.url)

export {
    link,
}
</script>

<a
    class={`
        btn btn-square
        p-0
        w-36 h-36
        ${$routeActive ? "btn-primary" : "bg-white/[0.02] border-white/[0.02]"}
        text-secondary
    `}
    href={$route}
>
    <span
        class={`
            gap-y-2 px-2 pt-6
            h-full
            inline-flex flex-col items-center
            ${$routeActive ? "text-primary" : "text-white/[0.12]"}
        `}
    >
        <svelte:component
            this={link.icon}
            class="text-4xl"
        />

        <small class="leading-normal">
            {link.label}
        </small>
    </span>
</a>
