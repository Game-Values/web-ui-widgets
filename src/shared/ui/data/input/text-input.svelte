<script lang="ts">
import type { HTMLInputTypeAttribute } from "svelte/elements"

import Textfield from "@smui/textfield"
import Icon from "@smui/textfield/icon"

export let label: string

export let required: boolean = false

export let type: HTMLInputTypeAttribute = "text"

export let value: string = ""
</script>

<Textfield
    {label}
    {required}
    {type}
    variant="outlined"
    bind:value
>
    <svelte:fragment slot="trailingIcon">
        {#if $$slots.suffixIcon}
            <Icon>
                <slot name="suffixIcon" />
            </Icon>
        {/if}
    </svelte:fragment>
</Textfield>
