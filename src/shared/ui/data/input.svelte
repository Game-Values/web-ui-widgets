<script lang="ts">
import type { IKeyboardEvent } from "$types"
import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements"

import { useEventDispatcher } from "$model"

interface $$Props extends HTMLInputAttributes {
    inputClass?: string
    placement?: "end" | "start"
}

interface $$Slots {
    icon: NonNullable<unknown>
}

interface $$Events {
    input: IKeyboardEvent<HTMLInputElement, null | number | string>
}

let { dispatchEvent: dispatchInputEvent } = useEventDispatcher<null | number | string>("input")

let className: null | string | undefined = ""

let inputClass: string = ""

let name: null | string | undefined = "search"

let placeholder: null | string | undefined = undefined

let placement: "end" | "start" = "start"

let required: boolean | null | undefined = false

let type: HTMLInputTypeAttribute | null | undefined = "text"

let value: any = undefined

function input(e: IKeyboardEvent<HTMLInputElement, string>): void {
    switch (e.currentTarget.type) {
        case "number":
            dispatchInputEvent(parseInt(e.currentTarget.value, 10))
            break

        default:
            dispatchInputEvent(e.currentTarget.value)
            break
    }
}

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
    class="indicator label label-icon {className}"
    class:label-icon-end={$$slots.icon && placement === "end"}
    class:label-icon-start={$$slots.icon && placement === "start"}
>
    {#if required}
        <span class="indicator-item badge badge-warning translate-x-0">
            Required
        </span>
    {/if}

    <input
        {name}
        class="input {inputClass}"
        {placeholder}
        {required}
        {...{ type }}
        bind:value
        on:input={input}
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
