<script lang="ts">
import { Dialog } from "$ui"

export let open: boolean
</script>

<Dialog bind:open>
    <svelte:fragment slot="content">
        Signin dialog
    </svelte:fragment>
</Dialog>
