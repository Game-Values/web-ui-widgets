<script lang="ts">
import type { ICallable, ICallableLazy, IEnhancedImageSrc } from "$types"

import { EnhancedImage } from "$ui/data"

interface $$Props {
    action?: IAction
    content?: string
    image: IEnhancedImageSrc
    title?: string
}

interface $$Slots {
    action: NonNullable<unknown>
    default: NonNullable<unknown>
    title: NonNullable<unknown>
}

type IAction = {
    handler: ICallable | ICallableLazy
    label: string
}

export let action: IAction | undefined = undefined

export let content: string = ""

export let image: IEnhancedImageSrc

export let title: string = ""
</script>

<figure class="hero h-96 place-items-baseline">
    <div class="hero-overlay overflow-hidden">
        <EnhancedImage
            alt="main-slide"
            size="lg"
            src={image}
        />
    </div>

    <figcaption
        class="
            hero-content
            p-16
            flex-col items-baseline self-center
        "
    >
        <div class="max-w-prose flex flex-col gap-y-3">
            <h1 class="empty:invisible">
                <slot name="title">
                    {title}
                </slot>
            </h1>

            <p class="empty:invisible">
                <strong>
                    <slot>
                        {content}
                    </slot>
                </strong>
            </p>

            <div class="w-full max-w-44">
                <slot name="action">
                    {#if action}
                        <button
                            class="btn btn-primary btn-wide"
                            on:click={action.handler}
                        >
                            {action.label}
                        </button>
                    {/if}
                </slot>
            </div>
        </div>
    </figcaption>
</figure>
