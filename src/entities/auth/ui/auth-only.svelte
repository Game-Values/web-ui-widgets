<script lang="ts">
import { useSession } from "$model"

interface $$Slots {
    default: NonNullable<unknown>
    fallback: NonNullable<unknown>
}

let { authenticated } = useSession()
</script>

{#if $authenticated}
    <slot />
{:else}
    <slot name="fallback" />
{/if}
