<script lang="ts">
import type { HTMLInputTypeAttribute } from "svelte/elements"

import { forwardEvent } from "$lib/helpers"

interface $$Props {
    class?: string
    inputClass?: string
    name?: string
    placeholder?: string
    placement?: "end" | "start"
    type?: HTMLInputTypeAttribute
    value?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let className: string = ""

let placement: "end" | "start" = "start"

let inputClass: string = ""

let name: string = "search"

let placeholder: string = "Search GameValues"

let type: HTMLInputTypeAttribute = "text"

let value: string = ""

export {
    className as class,
    inputClass,
    name,
    placeholder,
    placement,
    type,
    value,
}
</script>

<label
    class="label icon-input {className}"
    class:icon-input--icon-end={placement === "end"}
    class:icon-input--icon-start={placement === "start"}
>
    <input
        {name}
        class="input {inputClass}"
        {placeholder}
        {...{ type }}
        bind:value
        on:input={forwardEvent()}
    />

    <i
        style:height="var(--icon-size)"
        style:width="var(--icon-size)"
        class="icon"
    >
        <slot class="w-full h-full" />
    </i>
</label>

<style>
.icon-input {
    --icon-size: 1.25rem;

    @apply relative;
}

.icon-input .icon {
    @apply absolute inset-y-2/4;
    @apply -translate-y-2/4;
}

.icon-input--icon-start .input {
    @apply pl-[calc(var(--icon-size)+1rem)];
}

.icon-input--icon-start .icon {
    @apply left-4;
}

.icon-input--icon-start .input.input-sm {
    @apply pl-[calc(var(--icon-size)+0.5rem)];
}

.icon-input--icon-start .input.input-sm + .icon {
    @apply left-2;
}

.icon-input--icon-end .input {
    @apply pr-[calc(var(--icon-size)+1rem)];
}

.icon-input--icon-end .icon {
    @apply right-4;
}

.icon-input--icon-end .input.input-sm {
    @apply pr-[calc(var(--icon-size)+0.5rem)];
}

.icon-input--icon-end .input.input-sm + .icon {
    @apply right-2;
}
</style>
