<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"

import { useRoute, useStorage } from "$model"

let { storageValue: drawerOpened } = useStorage("drawer", true)

interface $$Props {
    class?: string
    link: IDrawerLink
}

interface $$Slots {
    default: NonNullable<unknown>
}

type IDrawerLink = IRouteWithIcon & IRouteWithLabel & {
    divider?: boolean
    iconClass?: string
}

let className: string = ""

let link: IDrawerLink

let { route, routeActive } = useRoute(link.url)

export {
    className as class,
    link,
}
</script>

<li class={className}>
    <a
        class="tooltip-right max-w-56 flex-1 text-secondary"
        class:active={$routeActive}
        class:tooltip={!$drawerOpened}
        data-tip={link.label}
        href={$route}
    >
        <svelte:component
            this={link.icon}
            class="text-xl {link.iconClass}"
        />

        {#if $drawerOpened}
            <b>
                {link.label}
            </b>
        {/if}
    </a>

    <slot />
</li>
