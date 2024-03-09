import type { IMsg, IWebToken } from "$schema/api"
import type { IForm } from "$types"
import type { IAuthRecoveryPasswordForm } from "~/features/auth"

import { useApi } from "$api"
import { useForm } from "$model"

export function useAuthRecoveryPasswordForm(): IForm<IAuthRecoveryPasswordForm, IMsg | IWebToken> {
    let { recoverPasswordApiV1LoginRecoverEmailPost } = useApi()

    return useForm<IAuthRecoveryPasswordForm, IMsg | IWebToken>({
        onSubmit: (data: IAuthRecoveryPasswordForm): Promise<IMsg | IWebToken> => (
            recoverPasswordApiV1LoginRecoverEmailPost(data.email)
        ),
    })
}
