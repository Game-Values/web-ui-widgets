<script lang="ts">
import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements"

interface $$Props extends HTMLInputAttributes {
    inputClass?: string
    placement?: "end" | "start"
}

interface $$Slots {
    icon: NonNullable<unknown>
}

let className: null | string | undefined = ""

let inputClass: string = ""

let name: null | string | undefined = "search"

let placeholder: null | string | undefined = undefined

let placement: "end" | "start" = "start"

let required: boolean | null | undefined = false

let type: HTMLInputTypeAttribute | null | undefined = "text"

let value: any = undefined

export {
    className as class,
    inputClass,
    name,
    placeholder,
    placement,
    required,
    type,
    value,
}
</script>

<label
    class="label label-icon {className}"
    class:label-icon-end={$$slots.icon && placement === "end"}
    class:label-icon-start={$$slots.icon && placement === "start"}
>
    <input
        {name}
        class="input {inputClass}"
        {placeholder}
        {required}
        {...{ type }}
        bind:value
    />

    {#if $$slots.icon}
        <i
            style:height="var(--icon-size)"
            style:width="var(--icon-size)"
            class="icon"
        >
            <slot
                name="icon"
                class="w-full h-full"
            />
        </i>
    {/if}
</label>
