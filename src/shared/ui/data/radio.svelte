<script lang="ts">
interface $$Props {
    checked?: boolean
    class?: string
    inputClass?: string
    label?: string
    name?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let checked: boolean = false

let className: string = ""

let inputClass: string = ""

let label: string | undefined = undefined

let name: string = "radio"

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
        {checked}
        type="radio"
    />

    <span class="label-text text-inherit leading-[inherit]">
        <slot>
            {label}
        </slot>
    </span>
</label>
