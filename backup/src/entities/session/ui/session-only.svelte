<script lang="ts">
import { useSession } from "$lib"

let { isAuthenticated } = useSession()
</script>

{#if $isAuthenticated}
    <slot />
{:else}
    <slot name="fallback" />
{/if}
