<script lang="ts">
import { SigninByEmail } from "~/features/signin"

import { DialogName } from "$lib"
import { Dialog } from "$ui"
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
