<script lang="ts">
import type { IActionSlide } from "~/entities/layout"

import { Button } from "$ui/common"

export let action: IActionSlide | undefined = undefined

export let content: string | undefined = undefined

export let image: string | undefined = undefined

export let imagePosition: string = "center right"

export let title: string | undefined = undefined
</script>

<div
    style:background-image={image ? `url(${image})` : ""}
    style:background-position={imagePosition}
    class="
        p-16 pr-[calc(50%+4rem*2)]
        h-96
        flex flex-col justify-center gap-3
        bg-no-repeat bg-cover
    "
>
    <h1 class="empty:(hidden)">
        <slot name="title">
            {title}
        </slot>
    </h1>

    <div class="empty:(hidden)">
        <slot name="content">
            {#if content}
                <small>
                    {content}
                </small>
            {/if}
        </slot>
    </div>

    <div class="empty:(hidden)">
        <slot name="action">
            {#if action}
                <Button on:click={action.handler}>
                    {action.label}
                </Button>
            {/if}
        </slot>
    </div>
</div>
