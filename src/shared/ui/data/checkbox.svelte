<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements"

import { remove } from "lodash-es"

interface $$Props extends HTMLInputAttributes {
    class?: string
    group?: string[]
    inputClass?: string
    label?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let group: string[] = []

let inputClass: string = ""

let label: string = ""

let value: string = ""

$: checked = group.includes(value)

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
        class="checkbox {inputClass}"
        {checked}
        type="checkbox"
        {...$$restProps}
        on:change={() => (
            checked
                ? remove(group, val => val === value)
                : group.push(value)
        )}
    />

    <span class="label-text">
        <slot>
            {label}
        </slot>
    </span>
</label>
