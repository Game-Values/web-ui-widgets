<script lang="ts">
import type { IItem } from "$schema/api"

import { useLot } from "~/entities/lot"

import { useEventDispatcher } from "$model"

import IconTrash from "virtual:icons/common/trash"

interface $$Props {
    lot: IItem
}

interface $$Events {
    click: CustomEvent<never>
}

let lot: IItem

let { deleteLot } = useLot(lot)
let { dispatchEvent: dispatchClickEvent } = useEventDispatcher("click", deleteLot)

export {
    lot,
}
</script>

<button
    class="btn btn-circle btn-sm btn-ghost tooltip"
    data-tip="Delete"
    on:click={() => dispatchClickEvent()}
>
    <i class="icon">
        <IconTrash />
    </i>
</button>
