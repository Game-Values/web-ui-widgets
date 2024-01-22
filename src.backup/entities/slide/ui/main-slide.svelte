<div
    class="
        p-16 pr-[calc(50%+4rem*2)]
        h-96
        flex flex-col justify-center gap-3
        bg-no-repeat bg-cover bg-right
    "
    style:background-image="url({src})"
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
            {#if !isEmpty(action)}
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

<script lang="ts">
import type { SlideAction } from "~/entities/slide/model"

import Button from "@smui/button"
import { isEmpty } from "lodash-es"

export let action: SlideAction = Object.create(null)

export let content: string = ""

export let src: string

export let title: string = ""
</script>
