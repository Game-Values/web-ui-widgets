<script lang="ts">
import type { IKeyOf } from "$types"
import type { SvelteHTMLElements } from "svelte/elements"

interface $$Props {
    class?: string
    horizontal?: boolean
    tag?: IKeyOf<SvelteHTMLElements>
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let horizontal: boolean = false

let tag: IKeyOf<SvelteHTMLElements> = "div"

export {
    className as class,
    horizontal,
    tag,
}
</script>

<svelte:element
    this={tag}
    class="divider {className}"
    class:divider-horizontal={horizontal}
>
    <slot />
</svelte:element>

<style>
.divider {
    @apply mx-0 my-2;
}

.divider:before,
.divider:after {
    @apply h-px;
}

.divider-horizontal {
    @apply mx-2 my-0;
    @apply w-px;
}

.divider-horizontal:before,
.divider-horizontal:after {
    @apply w-px;
}
</style>
