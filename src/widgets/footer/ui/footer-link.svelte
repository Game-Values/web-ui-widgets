<script lang="ts">
import type { IRouteWithLabel } from "$types"

import { useRoute } from "$model"

interface $$Props {
    class?: string
    link: IRouteWithLabel
}

let className: string = ""

let link: IRouteWithLabel

let { route } = useRoute(link.url)

export {
    className as class,
    link,
}
</script>

<li class={className}>
    <a
        class="link link-hover"
        href={$route}
    >
        {link.label}
    </a>
</li>
