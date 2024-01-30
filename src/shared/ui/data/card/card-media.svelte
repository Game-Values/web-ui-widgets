<script lang="ts">
import { Media, MediaContent, PrimaryAction } from "@smui/card"

export let action: boolean = false

export let border: boolean = false
</script>

<Media
    class={`
            bg-white/2
            rounded-xl
            ${border ? "border border-solid border-secondary" : ""}
        `}
>
    <MediaContent>
        {#if action}
            <PrimaryAction>
                <slot name="content" />
            </PrimaryAction>
        {:else}
            <slot name="content" />
        {/if}
    </MediaContent>
</Media>
