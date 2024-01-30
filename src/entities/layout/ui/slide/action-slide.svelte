<script lang="ts">
import type { IActionSlide } from "~/entities/layout"

import { useBackgroundImage } from "$lib/helpers"
import { Button } from "$ui/common"
import { Card, CardActions, CardContent } from "$ui/data"

let action: IActionSlide | undefined = undefined

let content: string | undefined = undefined

let image: string | undefined = undefined

let title: string | undefined = undefined

$: use = (
    image
        ? useBackgroundImage(image)
        : (): void => {}
)

export {
    action,
    content,
    image,
    title,
}
</script>

<Card
    class="p-16 pr-50% h-96"
    {use}
>
    <CardContent class="flex flex-col justify-center gap-y-3">
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
    </CardContent>

    <CardActions class="w-full max-w-18rem empty:(hidden)">
        <slot name="action">
            {#if action}
                <Button
                    class="w-full"
                    on:click={action.handler}
                >
                    {action.label}
                </Button>
            {/if}
        </slot>
    </CardActions>
</Card>
