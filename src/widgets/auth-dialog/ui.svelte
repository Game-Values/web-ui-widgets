<script lang="ts">
import type { IToken } from "~/shared/model"

import { authByOauth2Form, AuthLoginForm, closeAuthModal, isAuthModalOpen, setAuthCookies } from "~/entities/auth"
import { AuthByOauth2 } from "~/features/auth"
import { Dialog } from "~/shared/ui"

function whenAuthSuccess(authToken: IToken): void {
    setAuthCookies(authToken)
    closeAuthModal()
    location.reload()
}
</script>

<Dialog
    title="Log In"
    width="26rem"
    bind:open={$isAuthModalOpen}
>
    <svelte:fragment slot="content">
        <AuthLoginForm>
            <svelte:fragment slot="auth">
                <AuthByOauth2
                    data={$authByOauth2Form}
                    on:auth={e => whenAuthSuccess(e.detail)}
                />
            </svelte:fragment>
        </AuthLoginForm>
    </svelte:fragment>
</Dialog>
