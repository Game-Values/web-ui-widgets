import type { IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken } from "$schema/api"
import type { IForm } from "$types"

import { useApi } from "$api"
import { useForm, useSession } from "$model"

export function useAuthByEmailForm(): IForm<IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken> {
    let { loginWithOauth2ApiV1LoginOauthPost } = useApi()
    let { login } = useSession()

    return useForm<IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken>({
        onSubmit: (data: IBodyLoginWithOauth2ApiV1LoginOauthPost): Promise<IToken> => (
            loginWithOauth2ApiV1LoginOauthPost(data)
        ),

        onSuccess: login,
    })
}
