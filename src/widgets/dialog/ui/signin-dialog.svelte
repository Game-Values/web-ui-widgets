<script lang="ts">
import { SigninByEmail } from "~/features/signin"

import { useDialog } from "$model/dialog"
import { Dialog } from "$ui/effect"

let dialog = useDialog({
    name: "SIGN_IN",
    title: "Sign In",
    width: "26rem",
})
</script>

<Dialog {dialog}>
    <svelte:fragment slot="content">
        <SigninByEmail />
    </svelte:fragment>
</Dialog>
