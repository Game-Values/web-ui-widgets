<script lang="ts">
import type { IFormSelectOption, IMouseEvent } from "$types"
import type { HTMLSelectAttributes } from "svelte/elements"

import { useEventDispatcher } from "$model"

interface $$Props extends HTMLSelectAttributes {
    options: IFormSelectOption[]
    placement?: "end" | "start"
    selectClass?: string
}

interface $$Slots {
    icon: NonNullable<unknown>
}

interface $$Events {
    select: IMouseEvent<HTMLSelectElement, IFormSelectOption>
}

let className: null | string | undefined = ""

let name: null | string | undefined = undefined

let options: IFormSelectOption[] = []

let placeholder: null | string | undefined = undefined

let placement: "end" | "start" = "start"

let required: boolean | null | undefined = false

let selected: IFormSelectOption | undefined = undefined

let selectClass: string = ""

let value: any = undefined

let { dispatchEvent: dispatchSelectEvent } = useEventDispatcher<IFormSelectOption>("select")

export {
    className as class,
    name,
    options,
    placeholder,
    placement,
    required,
    selectClass,
    selected,
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

    <select
        {name}
        class="select select-bordered {selectClass}"
        {placeholder}
        {required}
        bind:value
        on:change={e => (
            dispatchSelectEvent(options[e.currentTarget.selectedIndex])
                ?.then(() => selected = options[e.currentTarget.selectedIndex])
        )}
    >
        {#each options as option (option.label)}
            <option
                disabled={option.disabled}
                selected={option.value === selected?.value}
                value={option.value}
            >
                {option.label}
            </option>
        {/each}
    </select>

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
