<script lang="ts">
import { isAuthorized } from "~/entities/auth"
</script>

{#if $isAuthorized}
    <slot />
{:else}
    <slot name="fallback" />
{/if}
