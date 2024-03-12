<script lang="ts">
import { SigninByEmail } from "~/features/auth"

import { DialogName } from "$lib"
import { Dialog } from "$chat-send-hub-message-form"
</script>

<Dialog
    name={DialogName.SIGN_IN}
    title="Sign In"
    width="26rem"
>
    <svelte:fragment slot="content">
        <SigninByEmail />
    </svelte:fragment>
</Dialog>
