<script lang="ts">
import FormField from "@smui/form-field"
import Switch from "@smui/switch"

import { forwardEvent } from "$lib/helpers"

export let checked: boolean = false

export let label: string = ""
</script>

<FormField>
    <Switch
        bind:checked
        on:SMUISwitch:change={forwardEvent(null, "change")}
    />

    <svelte:fragment slot="label">
        <slot name="label">
            {label}
        </slot>
    </svelte:fragment>
</FormField>
