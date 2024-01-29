<script lang="ts">
import type { HTMLAttributeAnchorTarget, HTMLButtonAttributes } from "svelte/elements"

import Button, { Icon, Label } from "@smui/button"

import { page } from "$app/stores"
import { forwardEvent } from "$lib/helpers"

let className: string = ""

let color: "primary" | "secondary" = "primary"

let href: string | undefined = undefined

let target: HTMLAttributeAnchorTarget | undefined = undefined

let type: HTMLButtonAttributes["type"] = "button"

let variant: "raised" | "text" = "raised"

$: activeClass = (
    href === $page.url.pathname
        ? "mdc-button--active"
        : ""
)

export {
    className as class,
    color,
    href,
    target,
    type,
    variant,
}
</script>

<Button
    class={`mdc-button--${variant} ${activeClass} ${className}`}
    {color}
    {href}
    {target}
    {type}
    {variant}
    on:click={forwardEvent()}
>
    {#if $$slots.prefixIcon}
        <Icon>
            <slot name="prefixIcon" />
        </Icon>
    {/if}

    <Label>
        <slot />
    </Label>

    {#if $$slots.suffixIcon}
        <Icon>
            <slot name="suffixIcon" />
        </Icon>
    {/if}
</Button>
