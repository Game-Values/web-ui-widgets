<script lang="ts">
import { Content, PrimaryAction } from "@smui/card"

let action: boolean = false

let background: boolean = false

let border: boolean = false

let className: string = ""

export {
    action,
    background,
    border,
    className as class,
}
</script>

<Content
    class={`
            rounded-xl
            ${background ? "bg-white/2" : ""}
            ${border ? "border border-solid border-secondary" : ""}
            ${className}
        `}
>
    {#if action}
        <PrimaryAction>
            <slot />
        </PrimaryAction>
    {:else}
        <slot />
    {/if}
</Content>
