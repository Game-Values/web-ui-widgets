<script lang="ts">
import FormField from "@smui/form-field"
import { Cell } from "@smui/layout-grid"

let className: string = ""

let smui: boolean = false

export {
    className as class,
    smui,
}
</script>

<Cell
    class={className}
    span={12}
>
    {#if smui}
        <FormField>
            <slot />

            <slot name="label" />
        </FormField>
    {:else}
        <slot />
    {/if}
</Cell>
