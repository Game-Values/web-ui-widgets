<script lang="ts">
import { forwardEvent } from "$lib/helpers"
import { IconInput } from "$ui/data"

import IconMagnifyingGlass from "virtual:icons/heroicons/magnifying-glass"

interface $$Props {
    class?: string
    inputClass?: string
    placeholder?: string
    placement?: "end" | "start"
    value?: string
}

let className: string = ""

let inputClass: string = ""

let placeholder: string = "Search GameValues"

let placement: "end" | "start" = "start"

let value: string = ""

export {
    className as class,
    inputClass,
    placeholder,
    placement,
    value,
}
</script>

<IconInput
    class="w-full {className}"
    {inputClass}
    {placeholder}
    {placement}
    type="search"
    bind:value
    on:input={forwardEvent()}
>
    <IconMagnifyingGlass />
</IconInput>
