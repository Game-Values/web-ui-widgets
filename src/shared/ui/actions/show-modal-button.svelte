<script lang="ts">
import type { IModal, IMouseEvent } from "$types"

import { useEventDispatcher, useModal } from "$model"

interface $$Props {
    class: string
    modal: IModal
}

interface $$Slots {
    default: NonNullable<unknown>
}

interface $$Events {
    click: IMouseEvent<HTMLButtonElement>
}

let className: string = ""

let modal: IModal

let { openModal } = useModal(modal)
let { dispatchEvent: dispatchClick } = useEventDispatcher("click", openModal)

export {
    className as class,
    modal,
}
</script>

<button
    class="btn {className}"
    on:click={() => dispatchClick()}
>
    <slot />
</button>
