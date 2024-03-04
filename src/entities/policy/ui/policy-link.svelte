<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"
import type { HTMLAnchorAttributes } from "svelte/elements"

import { useRoute } from "$model"

interface $$Props {
    class?: string
    link: IRouteWithLabel
    target?: HTMLAnchorAttributes["target"]
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let link: IRouteWithIcon | IRouteWithLabel

let target: HTMLAnchorAttributes["target"] = undefined

let { route } = useRoute(link.url)

export {
    className as class,
    link,
    target,
}
</script>

<a
    class="link link-hover {className}"
    href={$route}
    {target}
>
    <slot>
        {link.label}
    </slot>
</a>
