<script lang="ts">
import LayoutGrid, { InnerGrid } from "@smui/layout-grid"

let className: string = ""

let fixed: boolean = false

let inner: boolean = false

export {
    className as class,
    fixed,
    inner,
}
</script>

{#if inner}
    <InnerGrid class={className}>
        <slot />
    </InnerGrid>
{:else}
    <LayoutGrid
        fixedColumnWidth={fixed}
        innerGrid$class={className}
    >
        <slot />
    </LayoutGrid>
{/if}
