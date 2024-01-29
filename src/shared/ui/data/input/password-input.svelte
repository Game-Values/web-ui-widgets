<script lang="ts">
import IconEyeSlashSolid from "virtual:icons/heroicons/eye-slash-solid"
import IconEyeSolid from "virtual:icons/heroicons/eye-solid"

import { IconButton } from "$ui/common"
import { TextInput } from "$ui/data"

let showPassword: boolean = false

$: type = showPassword ? "text" : "password"

export let label: string = "Password"

export let required: boolean = false

export let value: string = ""
</script>

<TextInput
    {label}
    {required}
    {type}
    bind:value
>
    <svelte:fragment slot="suffixIcon">
        <IconButton
            on:click={() => showPassword = !showPassword}
        >
            {#if showPassword}
                <IconEyeSlashSolid />
            {:else}
                <IconEyeSolid />
            {/if}
        </IconButton>
    </svelte:fragment>
</TextInput>
