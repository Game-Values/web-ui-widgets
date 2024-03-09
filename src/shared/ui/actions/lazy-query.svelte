<script lang="ts">
import type { UseQueryStoreResult } from "@sveltestack/svelte-query"

type T = $$Generic

interface $$Slots {
    default: { data: T }
    error: { error: T }
    loading: NonNullable<unknown>
}

export let query: UseQueryStoreResult<T, any>
</script>

{#if $query.isLoading}
    <slot name="loading" />
{:else if $query.isError}
    <slot
        name="error"
        error={$query.error}
    />
{:else}
    <slot data={$query.data || Object.create(null)} />
{/if}
