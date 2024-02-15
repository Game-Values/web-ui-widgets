import type { IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken } from "$api"
import type { Token } from "$lib"
import type { IForm } from "$types"

import { createForm } from "felte"

import { useApi } from "$api"
import { useToken } from "$model"

export function useSigninByEmailForm(): IForm<IBodyLoginWithOauth2ApiV1LoginOauthPost> {
    return createForm<IBodyLoginWithOauth2ApiV1LoginOauthPost>({
        initialValues: {
            password: "",
            username: "",
        },
        onSubmit: (formData: IBodyLoginWithOauth2ApiV1LoginOauthPost): Promise<IToken> => (
            useApi().loginWithOauth2ApiV1LoginOauthPost(formData)
        ),
        onSuccess: (res: unknown): void => {
            useToken().setTokens(res as Record<Token, string>)
            location.reload()
        },
    })
}
