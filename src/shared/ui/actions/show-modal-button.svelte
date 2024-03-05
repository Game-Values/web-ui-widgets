<script lang="ts">
import type { IModal } from "$types"
import type { HTMLButtonAttributes } from "svelte/elements"

import { useEventDispatcher, useModal } from "$model"

interface $$Props {
    class?: string
    modal: IModal
    modalState?: any
    tooltip?: string
    type?: HTMLButtonAttributes["type"]
}

interface $$Slots {
    default: NonNullable<unknown>
}

interface $$Events {
    click: CustomEvent<never>
}

let className: string = ""

let modal: IModal

let modalState: any = undefined

let tooltip: string = ""

let type: HTMLButtonAttributes["type"] = "button"

let { openModal } = useModal(modal)
let { dispatchEvent: dispatchClickEvent } = useEventDispatcher("click", (): void => openModal(modalState))

export {
    className as class,
    modal,
    modalState,
    tooltip,
    type,
}
</script>

<button
    class={className}
    class:tooltip={tooltip}
    data-tip={tooltip}
    {type}
    on:click={() => dispatchClickEvent()}
>
    <slot />
</button>
