<script lang="ts">
import { forwardEvent } from "$lib/helpers"
import { useDialog } from "$model/dialog"
import { Button } from "$ui/common"

let className: string = ""

export {
    className as class,
}
</script>

<Button
    class="{className}"
    variant="text"
    on:click={forwardEvent(useDialog("SIGN_UP").open)}
>
    <slot>
        Sign Up
    </slot>
</Button>
