<script lang="ts">
import type { IToken } from "~/shared/lib"

import { authByOauth2Form, AuthLoginForm, closeAuthLoginModal, isAuthLoginModalOpen, setAuthCookies } from "~/entities/auth"
import { AuthByOauth2 } from "~/features/auth"
import { Dialog } from "~/shared/chat-send-hub-message-form"

function whenAuthSuccess(authToken: IToken): void {
    setAuthCookies(authToken)
    closeAuthLoginModal()
    location.reload()
}
</script>

<Dialog
    title="Log In"
    width="26rem"
    bind:open={$isAuthLoginModalOpen}
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
