import type { IBodyCreateUserProfileApiV1UsersPost, IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken, IUser } from "$schema/api"
import type { IForm } from "$types"

import { useApi } from "$api"
import { useForm, useSession } from "$model"

export function useAuthRegistrationByEmailForm(): IForm<
    IBodyCreateUserProfileApiV1UsersPost,
    IBodyLoginWithOauth2ApiV1LoginOauthPost
> {
    let { createUserProfileApiV1UsersPost, loginWithOauth2ApiV1LoginOauthPost } = useApi()
    let { login } = useSession()

    return useForm<
        IBodyCreateUserProfileApiV1UsersPost,
        IBodyLoginWithOauth2ApiV1LoginOauthPost
    >({
        initialValues: {
            agree_with_policy: true,
            send_notifications: true,
        },

        onSubmit: async (
            data: IBodyCreateUserProfileApiV1UsersPost,
        ): Promise<IBodyLoginWithOauth2ApiV1LoginOauthPost> => {
            await createUserProfileApiV1UsersPost(data)

            return {
                password: data.password,
                username: data.email,
            }
        },

        onSuccess: async (authPayload: IBodyLoginWithOauth2ApiV1LoginOauthPost): Promise<void> => {
            let token: IToken = await loginWithOauth2ApiV1LoginOauthPost(authPayload)

            return login(token)
        },
    })
}
