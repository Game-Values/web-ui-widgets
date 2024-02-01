<script lang="ts">
import type { ICallable } from "$types"
import type { MDCChipSelectionEvent } from "@material/chips/deprecated/chip"

import { Set } from "@smui/chips"

import { forwardEvent } from "$lib/helpers"

let forwardSelect: ICallable = forwardEvent(null, "select")

function handleSelect(e: MDCChipSelectionEvent): void {
    if (e.detail.selected)
        forwardSelect(e)
}

export let chips: any[]

export let choice: boolean = false

export let selected: any | any[] | undefined = undefined
</script>

<Set
    {chips}
    {choice}
    bind:selected
    on:SMUIChip:selection={handleSelect}
    let:chip
>
    <slot {chip} />
</Set>
