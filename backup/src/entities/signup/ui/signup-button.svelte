<script lang="ts">
import Button from "@smui/button"

import { DialogName, forwardEvent } from "$lib"
import { useDialog } from "$lib"

let { openDialog } = useDialog()

let className: string = ""

export {
    className as class,
}
</script>

<Button
    class="text-normal text-nowrap font-bold {className}"
    variant="text"
    on:click={forwardEvent(() => openDialog(DialogName.SIGN_UP))}
>
    <slot>
        Sign Up
    </slot>
</Button>
