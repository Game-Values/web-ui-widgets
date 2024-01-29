<script lang="ts">
import type { HTMLAttributeAnchorTarget } from "svelte/elements"

import Fab from "@smui/fab"

import { page } from "$app/stores"
import { forwardEvent } from "$lib/helpers"

let className: string = ""

let color: "primary" | "secondary" = "primary"

let href: string | undefined = undefined

let mini: boolean = false

let target: HTMLAttributeAnchorTarget | undefined = undefined

let type: HTMLButtonElement["type"] = "button"

$: activeClass = (
    href === $page.url.pathname
        ? "mdc-fab--active"
        : ""
)

export {
    className as class,
    color,
    href,
    mini,
    target,
    type,
}
</script>

<Fab
    class={`mdc-fab--color-${color} ${activeClass} ${className}`}
    {color}
    {href}
    {mini}
    {target}
    {type}
    on:click={forwardEvent()}
>
    <slot />
</Fab>
