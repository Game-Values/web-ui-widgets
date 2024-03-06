import type { IUser, IUserUpdate } from "$schema/api"
import type { IForm } from "$types"

import { pick } from "lodash-es"

import { useApi } from "$api"
import { useForm, useSession } from "$model"

export function useUserForm(): IForm<IUserUpdate, IUser> {
    let { updateUserApiV1UsersPut } = useApi()
    let { getSession } = useSession()

    let { user } = getSession()

    return useForm<IUserUpdate, IUser>({
        initialValues: pick<IUser>(user, [
            "attributes",
            "email",
            "full_name",
        ]),

        onSubmit: (data: IUserUpdate): Promise<IUser> => (
            updateUserApiV1UsersPut(data)
        ),
    })
}
