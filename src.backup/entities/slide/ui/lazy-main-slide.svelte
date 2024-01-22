<LazyClientOnly
    action={action}
    component={LazyMainSlide}
    content={content}
    src={src}
    title={title}
>
    {#if $$slots.title}
        <slot name="title" />
    {/if}

    {#if $$slots.content}
        <slot name="content" />
    {/if}

    {#if $$slots.action}
        <slot name="action" />
    {/if}
</LazyClientOnly>

<script lang="ts">
import type { SlideAction } from "~/entities/slide/model"
import type { TCallableLazy } from "~/shared/model"

import { asyncModule } from "~/shared/lib"
import { LazyClientOnly } from "~/shared/ui"

let LazyMainSlide: TCallableLazy<ConstructorOfATypedSvelteComponent> = (
    (): Promise<ConstructorOfATypedSvelteComponent> => (
        asyncModule("~/entities/slide/ui/main-slide.svelte")
    )
)

export let action: SlideAction = Object.create(null)

export let content: string = ""

export let src: string

export let title: string = ""
</script>
