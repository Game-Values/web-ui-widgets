<script lang="ts">
import type { HTMLTextareaAttributes } from "svelte/elements"

interface $$Props extends HTMLTextareaAttributes {
    placement?: "end" | "start"
    textareaClass?: string
}

interface $$Slots {
    icon: NonNullable<unknown>
}

let className: null | string | undefined = ""

let name: null | string | undefined = "search"

let placeholder: null | string | undefined = undefined

let placement: "end" | "start" = "start"

let textareaClass: string = ""

let required: boolean | null | undefined = false

let rows: null | number | undefined = undefined

let value: any = undefined

export {
    className as class,
    name,
    placeholder,
    placement,
    required,
    rows,
    textareaClass,
    value,
}
</script>

<label
    class="label label-icon {className}"
    class:label-icon-end={$$slots.icon && placement === "end"}
    class:label-icon-start={$$slots.icon && placement === "start"}
>
    <textarea
        {name}
        class="textarea textarea-bordered {textareaClass}"
        {placeholder}
        {required}
        {rows}
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
