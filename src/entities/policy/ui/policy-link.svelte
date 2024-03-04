<script lang="ts">
import type { IRouteWithLabel } from "$types"
import type { HTMLAnchorAttributes } from "svelte/elements"

import { useRoute } from "$model"

interface $$Props {
    class?: string
    link: IRouteWithLabel
    target?: HTMLAnchorAttributes["target"]
}

let className: string = ""

let link: IRouteWithLabel

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
    {link.label}
</a>
