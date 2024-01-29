<script lang="ts">
export let promise: Promise<unknown>
</script>

{#await promise}
    <slot name="pending" />
{:then value}
    <slot name="resolve" {value} />
{:catch error}
    <slot name="reject" {error} />
{/await}
