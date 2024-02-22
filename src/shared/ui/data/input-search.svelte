<script lang="ts">
import type { IKeyboardEvent } from "$types"
import type { HTMLInputAttributes } from "svelte/elements"

import { useEventDispatcher } from "$model"
import { Input } from "$ui/data"

import IconMagnifyingGlass from "virtual:icons/heroicons/magnifying-glass"

interface $$Props extends HTMLInputAttributes {
    inputClass?: string
    placement?: "end" | "start"
}

interface $$Events {
    search: IKeyboardEvent<HTMLInputElement, string>
}

let { dispatchEvent: dispatchSearchEvent } = useEventDispatcher<string>("search")

let className: null | string | undefined = ""

let inputClass: string = ""

let placement: "end" | "start" = "start"

export {
    className as class,
    inputClass,
    placement,
}
</script>

<search class={className}>
    <Input
        class="w-full"
        {inputClass}
        {placement}
        type="search"
        {...$$restProps}
        on:input={e => dispatchSearchEvent(e.currentTarget.value)}
    >
        <svelte:fragment slot="icon">
            <IconMagnifyingGlass />
        </svelte:fragment>
    </Input>
</search>
