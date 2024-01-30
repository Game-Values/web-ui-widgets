<script lang="ts">
import type { SvelteComponent } from "svelte"

import { Content, Media, MediaContent, PrimaryAction } from "@smui/card"

let action: boolean = false

let className: string = ""

let component: SvelteComponent | undefined = undefined

let media: boolean = false

export {
    action,
    className as class,
    component,
    media,
}
</script>

{#if media}
    <Media class={className}>
        {#if action}
            <PrimaryAction>
                <slot />
            </PrimaryAction>
        {:else}
            <slot />
        {/if}
    </Media>
{:else}
    <Content
        class={className}
        {component}
    >
        {#if action}
            <PrimaryAction>
                <slot />
            </PrimaryAction>
        {:else}
            <slot />
        {/if}
    </Content>
{/if}
