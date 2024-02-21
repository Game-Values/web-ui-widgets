<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"
import type { HTMLAnchorAttributes } from "svelte/elements"

import { useRoute } from "$model"

interface $$Props {
    link: IRouteWithIcon | IRouteWithLabel
    target?: HTMLAnchorAttributes["target"]
}

interface $$Slots {
    default: NonNullable<unknown>
}

let link: IRouteWithIcon | IRouteWithLabel

let target: HTMLAnchorAttributes["target"] = undefined

let { route } = useRoute(link.url)

export {
    link,
    target,
}
</script>

<a
    class="link link-hover"
    href={$route}
>
    <slot>
        {link.label}
    </slot>
</a>
