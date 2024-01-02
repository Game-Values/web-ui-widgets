<script lang="ts">
import Autocomplete from "@smui-extra/autocomplete"
import Icon from "@smui/textfield/icon"
import Textfield from "@smui/textfield"

import IconSearch from "~icons/base/search"

// todo:
let value: string = ""
</script>

<Autocomplete class="w-full">
    <Textfield
        bind:value={value}
        class="w-full"
        label="Search"
        variant="outlined"
    >
        <Icon slot="trailingIcon">
            <IconSearch />
        </Icon>
    </Textfield>
</Autocomplete>
