import type { IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken } from "$schema/api"
import type { IForm } from "$types"

import { createForm } from "felte"

import { useApi } from "$api"
import { useSession } from "$model"

export function useAuthByEmailForm(): IForm<IBodyLoginWithOauth2ApiV1LoginOauthPost> {
    let { loginWithOauth2ApiV1LoginOauthPost } = useApi()
    let { login } = useSession()

    return createForm<IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken>({
        onSubmit: loginWithOauth2ApiV1LoginOauthPost,
        onSuccess: login,
    })
}
