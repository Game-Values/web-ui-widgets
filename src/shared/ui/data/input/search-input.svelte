<script lang="ts">
import IconSearch from "virtual:icons/common/search"

import { TextInput } from "$ui/data"

export let label: string = "Search"

export let required: boolean = false

export let value: string = ""
</script>

<TextInput
    {label}
    {required}
    bind:value
>
    <svelte:fragment slot="suffixIcon">
        <IconSearch />
    </svelte:fragment>
</TextInput>
