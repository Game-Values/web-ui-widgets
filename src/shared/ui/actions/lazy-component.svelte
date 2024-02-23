<script lang="ts">
import type { ILazyComponentConstructor, ILazyComponentSrc } from "$types"

import { lazyComponent } from "$lib/helpers"
import { LazyPromise } from "$ui/actions"

interface $$Props extends Record<string, any> {
    src: ILazyComponentSrc
}

interface $$Slots {
    default: { component: ILazyComponentConstructor }
}

export let src: ILazyComponentSrc
</script>

<LazyPromise
    promise={lazyComponent(src)}
    let:value={component}
>
    {#if $$slots.default}
        <slot {component} />
    {:else}
        <svelte:component
            this={component}
            {...$$restProps}
        />
    {/if}
</LazyPromise>
