<script lang="ts">
import type { IKeyOf } from "$types"
import type { SvelteHTMLElements } from "svelte/elements"

import { cleanObject } from "$lib/utils"
import { Container } from "$ui/layout"

interface $$Props {
    class?: string
    fluid?: boolean
    gap?: IGridGap
    subgrid?: boolean
    tag?: IKeyOf<SvelteHTMLElements>
}

interface $$Slots {
    default: NonNullable<unknown>
}

type IGridGap = 0 | 1 | 2 | 3 | 4 | 5 | 6

let className: string = ""

let gap: IGridGap = 6

let fluid: boolean = false

let subgrid: boolean = false

let tag: IKeyOf<SvelteHTMLElements> = "section"

$: gridClass = (
    Object.keys(
        cleanObject({
            [className]: className,
            "gap-0": gap === 0,
            "gap-1": gap === 1,
            "gap-2": gap === 2,
            "gap-3": gap === 3,
            "gap-4": gap === 4,
            "gap-5": gap === 5,
            "gap-6": gap === 6,
            "grid grid-cols-12": "true",
        }),
    ).join(" ")
)

export {
    className as class,
    fluid,
    gap,
    subgrid,
}
</script>

{#if subgrid}
    <svelte:element
        this={tag}
        class={gridClass}
    >
        <slot />
    </svelte:element>
{:else}
    <Container
        class={gridClass}
        {fluid}
        {tag}
    >
        <slot />
    </Container>
{/if}
