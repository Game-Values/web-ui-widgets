<script lang="ts">
import type { IGameSlideAction } from "~/entities/game"

import Button from "@smui/button"

export let action: IGameSlideAction | undefined = undefined

export let content: string | undefined = undefined

export let src: string

export let title: string | undefined = undefined
</script>

<div
    style:background-image="url({src})"
    class="
        p-16 pr-[calc(50%+4rem*2)]
        h-96
        flex flex-col justify-center gap-3
        bg-no-repeat bg-cover bg-right bg-[{src}]
    "
>
    <h1 class="empty:(hidden)">
        <slot name="title">
            {#if title}
                {title}
            {/if}
        </slot>
    </h1>

    <div>
        <slot name="content">
            {#if content}
                <small>
                    {content}
                </small>
            {/if}
        </slot>
    </div>

    <div>
        <slot name="action">
            {#if action}
                <Button
                    color="primary"
                    on:click={action.handler}
                >
                    {action.label}
                </Button>
            {/if}
        </slot>
    </div>
</div>
