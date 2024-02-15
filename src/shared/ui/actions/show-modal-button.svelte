<script lang="ts">
import type { IModal } from "$types"

import { forwardEvent } from "$lib/helpers"
import { useModal } from "$model"

interface $$Props {
    class: string
    modal: IModal
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let modal: IModal

let { openModal } = useModal(modal)

export {
    className as class,
    modal,
}
</script>

<button
    class="btn {className}"
    on:click={forwardEvent(openModal)}
>
    <slot />
</button>
