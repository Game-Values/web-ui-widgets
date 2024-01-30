<script lang="ts">
import { SignupByEmail } from "~/features/signup"

import { useDialog } from "$model/dialog"
import { Dialog } from "$ui/effect"

let dialog = useDialog({
    name: "SIGN_UP",
    title: "Sign Up",
    width: "26rem",
})
</script>

<Dialog {dialog}>
    <svelte:fragment slot="content">
        <SignupByEmail />
    </svelte:fragment>
</Dialog>
