<script lang="ts">
type T = $$Generic

interface $$Slots {
    default: { value: T }
    error: { error: T }
    loading: NonNullable<unknown>
}

export let promise: Promise<T>
</script>

{#await promise}
    <slot name="loading" />
{:then value}
    <slot {value} />
{:catch error}
    <slot
        name="error"
        {error}
    />
{/await}
