<script lang="ts">
import { useSession } from "$model/session"

let { isAuthenticated } = useSession()
</script>

{#if $isAuthenticated}
    <slot />
{:else}
    <slot name="fallback" />
{/if}
