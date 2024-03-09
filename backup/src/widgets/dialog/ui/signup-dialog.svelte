<script lang="ts">
import { SignupByEmail } from "~/features/signup"

import { DialogName } from "$lib"
import { Dialog } from "$chat-send-hub-message"
</script>

<Dialog
    name={DialogName.SIGN_UP}
    title="Sign Up"
    width="26rem"
>
    <svelte:fragment slot="content">
        <SignupByEmail />
    </svelte:fragment>
</Dialog>
