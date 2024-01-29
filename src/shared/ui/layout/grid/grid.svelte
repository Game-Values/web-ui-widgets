<script lang="ts">
import LayoutGrid, { InnerGrid } from "@smui/layout-grid"

let className: string = ""

let nested: boolean = false

export {
    className as class,
    nested,
}
</script>

{#if nested}
    <InnerGrid class={className}>
        <slot />
    </InnerGrid>
{:else}
    <LayoutGrid class={className}>
        <slot />
    </LayoutGrid>
{/if}
