<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"

import { useRoute } from "$model"

interface $$Props {
    class?: string
    link: IRouteWithLabel
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let link: IRouteWithIcon | IRouteWithLabel

let { route, routeActive } = useRoute(link.url)

export {
    className as class,
    link,
}
</script>

<a
    class={`
        btn btn-sm
        ${$routeActive ? "btn-primary" : "bg-white/[0.02] border-white/[0.02]"}
        ${className}
    `}
    href={$route}
>
    <slot>
        {link.label}
    </slot>
</a>
