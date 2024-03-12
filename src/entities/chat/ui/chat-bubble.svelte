<script lang="ts">
import { debounce } from "lodash-es"
import { onDestroy, onMount } from "svelte"

import { observeElement } from "$lib/helpers"

interface $$Props {
    class?: string
}

interface $$Slots {
    default: NonNullable<unknown>
    sendMessage: NonNullable<unknown>
    skeleton: NonNullable<unknown>
}

let className: string = ""

let chatContainer: HTMLUListElement | undefined

let observer: MutationObserver | undefined

onMount(() => {
    if (chatContainer) {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight })
        observer = observeElement(chatContainer, debounce((element: HTMLElement): void => (
            element.scrollTo({ top: element.scrollHeight })
        )), { childList: true })
    }
})

onDestroy((): void => observer?.disconnect())

export {
    className as class,
}
</script>

<div
    class="
        card card-normal
        glass glass-sm
        w-full h-full
        p-4
        bg-black/[0.06]
        rounded-b-2xl
        shadow-none
        {className}
    "
>
    <ul
        bind:this={chatContainer}
        class="mb-4 pr-4 overflow-x-hidden overflow-y-auto"
    >
        <slot />
    </ul>

    <slot name="skeleton" />

    <div class="mt-auto">
        <slot name="sendMessage" />
    </div>
</div>
