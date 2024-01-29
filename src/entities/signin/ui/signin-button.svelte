<script lang="ts">
import { DialogName } from "$lib/enums"
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
    on:click={forwardEvent(useDialog(DialogName.SIGN_IN).open)}
>
    <slot>
        Sign In
    </slot>
</Button>
