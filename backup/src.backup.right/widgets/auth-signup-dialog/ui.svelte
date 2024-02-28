<script lang="ts">
import type { IAuthSignupForm } from "~/entities/auth"
import type { IBodyCreateUserProfileApiV1UsersPost, IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken } from "~/shared/model"

import { pick } from "lodash-es"

import { authByOauth2, AuthLoginButton, authSignupForm, AuthSignupForm, closeAuthSignupModal, isAuthSignupModalOpen, setAuthCookies } from "~/entities/auth"
import { AuthSignup } from "~/features/auth"
import { Dialog } from "~/shared/chat-send-hub-message"

$: authSignupPayload = (
    pick<IAuthSignupForm, keyof IBodyCreateUserProfileApiV1UsersPost>($authSignupForm, [
        "email",
        "full_name",
        "password",
    ])
)

function whenSignupSuccess(): void {
    let authPayload: IBodyLoginWithOauth2ApiV1LoginOauthPost = {
        password: $authSignupForm.password,
        username: $authSignupForm.email,
    }

    authByOauth2(authPayload)
        .then((authToken: IToken) => setAuthCookies(authToken))
        .then(() => closeAuthSignupModal())
        .then(() => location.reload())
}
</script>

<Dialog
    title="Registration"
    width="26rem"
    bind:open={$isAuthSignupModalOpen}
>
    <svelte:fragment slot="content">
        <AuthSignupForm>
            <svelte:fragment slot="signup">
                <AuthSignup
                    class="w-full"
                    data={authSignupPayload}
                    on:signup={() => whenSignupSuccess()}
                />
            </svelte:fragment>
        </AuthSignupForm>

        <div
            class="
                mt-[var(--mdc-layout-grid-gutter-desktop)]
                flex flex-col items-center
            "
        >
            <span class="text-white/60">
                Already have an account on GameValues?
            </span>

            <AuthLoginButton on:click={() => closeAuthSignupModal()} />
        </div>
    </svelte:fragment>
</Dialog>
