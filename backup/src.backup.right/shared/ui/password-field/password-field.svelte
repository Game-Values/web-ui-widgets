<script lang="ts">
import IconButton from "@smui/icon-button"
import Textfield from "@smui/textfield"

import IconEyeSlashSolid from "virtual:icons/heroicons/eye-slash-solid"
import IconEyeSolid from "virtual:icons/heroicons/eye-solid"

let isShowPassword: boolean = false

$: textfieldType = isShowPassword ? "text" : "password"

export let label: string = "Password"

export let required: boolean = false

export let value: string = ""
</script>

<Textfield
    {label}
    {required}
    type={textfieldType}
    variant="outlined"
    bind:value
>
    <IconButton
        slot="trailingIcon"
        on:click={() => isShowPassword = !isShowPassword}
    >
        {#if isShowPassword}
            <IconEyeSlashSolid />
        {:else}
            <IconEyeSolid />
        {/if}
    </IconButton>
</Textfield>
