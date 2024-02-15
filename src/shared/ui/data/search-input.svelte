<script lang="ts">
import IconMagnifyingGlass from "virtual:icons/heroicons/magnifying-glass"

interface $$Props {
    class?: string
    icon?: "end" | "start"
    inputClass?: string
    placeholder?: string
    value?: string
}

let className: string = ""

let icon: "end" | "start" = "start"

let inputClass: string = ""

let placeholder: string = "Search GameValues"

let value: string = ""

export {
    className as class,
    icon,
    inputClass,
    placeholder,
    value,
}
</script>

<label class="form-control label relative {className}">
    <IconMagnifyingGlass
        class={`
            absolute inset-y-2/4 -translate-y-2/4
            text-secondary

            ${icon === "start" ? "left-3" : "right-3"}
        `}
    />

    <input
        style:padding-left={icon === "start" ? "2rem" : undefined}
        style:padding-right={icon === "end" ? "2rem" : undefined}
        class="input input-bordered {inputClass}"
        placeholder={placeholder}
        type="search"
        bind:value
    />
</label>
