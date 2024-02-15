<script lang="ts">
import IconMagnifyingGlass from "virtual:icons/heroicons/magnifying-glass"

interface $$Props {
    class?: string
    inputClass?: string
    placeholder?: string
    value?: string
}

let className: string = ""

let inputClass: string = ""

let placeholder: string = "Search GameValues"

let value: string = ""

export {
    className as class,
    inputClass,
    placeholder,
    value,
}
</script>

<label class="form-control relative {className}">
    <input
        class="input input-bordered {inputClass}"
        placeholder={placeholder}
        type="search"
        bind:value
    />

    <IconMagnifyingGlass class="absolute left-2 inset-y-2/4 -translate-y-2/4" />
</label>

<style>
.input {
    @apply pl-[calc(1.25rem+0.5rem*2)];
}
</style>
