<script lang="ts">
import FormField from "@smui/form-field"

let className: string = ""

export {
    className as class,
}
</script>

<FormField class={className}>
    <slot />

    <svelte:fragment slot="label">
        <slot name="label" />
    </svelte:fragment>
</FormField>
