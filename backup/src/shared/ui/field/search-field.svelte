<script lang="ts">
import Textfield from "@smui/textfield"
import Icon from "@smui/textfield/icon"

import IconSearch from "virtual:icons/common/search"

export let label: string = "Search"

export let value: string = ""
</script>

<Textfield
    {label}
    variant="outlined"
    bind:value
>
    <Icon slot="trailingIcon">
        <IconSearch />
    </Icon>
</Textfield>
