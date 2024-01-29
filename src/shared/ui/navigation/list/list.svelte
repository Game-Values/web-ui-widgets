<script lang="ts">
import List from "@smui/list"
import { setContext } from "svelte"

let nav: boolean = false

$: if (nav) {
    setContext("SMUI:list:nav", true)
    setContext("SMUI:list:item:nav", true)
}

export {
    nav,
}
</script>

<List>
    <slot />
</List>
