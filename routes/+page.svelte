<script lang="ts">
import { onMount } from "svelte"

import { openDialog } from "$model"

onMount(() => {
    openDialog("signin-dialog")
})
</script>

<slot />
