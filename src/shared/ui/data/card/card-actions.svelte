<script lang="ts">
import { ActionButtons, ActionIcons, Actions } from "@smui/card"

let className: string = ""

export {
    className as class,
}
</script>

<Actions class={className}>
    <slot />

    {#if $$slots.actionButtons}
        <ActionButtons>
            <slot name="actionButtons" />
        </ActionButtons>
    {/if}

    {#if $$slots.actionIcons}
        <ActionIcons>
            <slot name="actionIcons" />
        </ActionIcons>
    {/if}
</Actions>
