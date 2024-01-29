<script lang="ts">
import type { HTMLAttributeAnchorTarget } from "svelte/elements"

import IconButton from "@smui/icon-button"

import { page } from "$app/stores"
import { forwardEvent } from "$lib/helpers"

let action: (
    "close" |
    "first-page" |
    "last-page" |
    "next-page" |
    "prev-page" |
    undefined
) = undefined

let className: string = ""

let color: "primary" | "secondary" = "primary"

let href: string | undefined = undefined

let tabindex: number | undefined = undefined

let target: HTMLAttributeAnchorTarget | undefined = undefined

let type: HTMLButtonElement["type"] = "button"

$: activeClass = (
    href === $page.url.pathname
        ? "mdc-icon-button--active"
        : ""
)

export {
    action,
    className as class,
    color,
    href,
    tabindex,
    target,
    type,
}
</script>

<IconButton
    class={`${activeClass} ${className}`}
    {action}
    {color}
    {href}
    {tabindex}
    {target}
    {type}
    on:click={forwardEvent()}
>
    <slot />
</IconButton>
