<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements"

interface $$Props extends HTMLInputAttributes {
    class?: string
    group?: string
    inputClass?: string
    label?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: null | string | undefined = ""

let group: string | undefined = undefined

let inputClass: string = ""

let label: string | undefined = undefined

let value: string | undefined = undefined

export {
    className as class,
    group,
    inputClass,
    label,
    value,
}
</script>

<label class="label gap-x-3 justify-start cursor-pointer {className}">
    <input
        class="radio {inputClass}"
        checked={group === value}
        type="radio"
        {...$$restProps}
        on:change={() => group = value}
    />

    <span class="label-text">
        <slot>
            {label}
        </slot>
    </span>
</label>
