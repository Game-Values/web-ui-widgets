<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements"

interface $$Props extends HTMLInputAttributes {
    class?: string
    inputClass?: string
    label?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let checked: boolean | null | undefined = false

let className: null | string | undefined = ""

let inputClass: string = ""

let label: string | undefined = undefined

let name: null | string | undefined = undefined

let required: boolean | null | undefined = false

export {
    checked,
    className as class,
    inputClass,
    label,
    name,
}
</script>

<label class="label gap-x-4 justify-start cursor-pointer {className}">
    <input
        {name}
        class="radio {inputClass}"
        {required}
        type="radio"
        bind:value={checked}
    />

    <span class="label-text">
        <slot>
            {label}
        </slot>
    </span>
</label>
