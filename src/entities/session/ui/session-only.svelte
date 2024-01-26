<script lang="ts">
import { useSession } from "$model"

let { isAuthenticated } = useSession()
</script>

{#if $isAuthenticated}
    <slot />
{:else}
    <slot name="fallback" />
{/if}
