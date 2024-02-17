<script lang="ts">
interface $$Props {
    checked?: boolean
    class?: string
    inputClass?: string
    label?: string
}

interface $$Slots {
    default: NonNullable<unknown>
}

let checked: boolean = false

let className: string = ""

let inputClass: string = ""

let label: string | undefined = undefined

export {
    checked,
    className as class,
    inputClass,
    label,
}
</script>

<label class="label gap-x-4 justify-start cursor-pointer {className}">
    <input
        class="toggle {inputClass}"
        type="checkbox"
        bind:checked
    />

    <span class="label-text text-inherit leading-[inherit]">
        <slot>
            {label}
        </slot>
    </span>
</label>
