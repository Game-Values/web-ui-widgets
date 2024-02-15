<script lang="ts">
import type { ICallable, ICallableLazy } from "$types"

import { EnhancedImage } from "$ui/data"

interface $$Props {
    action?: IAction
    content?: string
    image: string
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

export let image: string

export let title: string = ""
</script>

<figure class="hero h-96 place-items-baseline">
    {#if image}
        <div class="hero-image hero-overlay overflow-hidden">
            <EnhancedImage
                alt="main-slide"
                sizes="min(1920px, 100dvw)"
                src={image}
            />
        </div>
    {/if}

    <figcaption
        class="
            hero-content
            m-12 gap-y-3
            max-w-[25rem]
            flex flex-col items-baseline self-center
        "
    >
        <h1 class="empty:(hidden)">
            <slot name="title">
                {title}
            </slot>
        </h1>

        <p class="empty:(hidden)">
            <slot>
                {content}
            </slot>
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
    </figcaption>
</figure>
