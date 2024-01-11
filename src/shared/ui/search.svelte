<script lang="ts">
import Icon from "@smui/textfield/icon"
import Textfield from "@smui/textfield"

import IconSearch from "~icons/base/search"

let value: string = ""

export let placeholder: string = "Search"
</script>

<Textfield
    bind:value
    class="w-full"
    label={placeholder}
    variant="outlined"
>
    <Icon slot="trailingIcon">
        <IconSearch />
    </Icon>
</Textfield>
