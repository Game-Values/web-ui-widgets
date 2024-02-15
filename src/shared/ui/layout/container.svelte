<script lang="ts">
import type { IKeyOf } from "$types"
import type { SvelteHTMLElements } from "svelte/elements"

interface $$Props {
    class?: string
    fluid?: boolean
    tag?: IKeyOf<SvelteHTMLElements>
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let fluid: boolean = false

let tag: IKeyOf<SvelteHTMLElements> = "div"

export {
    className as class,
    fluid,
    tag,
}
</script>

<svelte:element
    this={tag}
    class="container {className}"
    class:max-w-full={fluid}
>
    <slot />
</svelte:element>
