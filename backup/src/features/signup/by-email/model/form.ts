import type { IBodyCreateUserProfileApiV1UsersPost, IUser } from "$api"
import type { IForm } from "$types"

import { createForm } from "felte"

import { useApi } from "$api"

export function useSignupByEmailForm(): IForm<IBodyCreateUserProfileApiV1UsersPost> {
    return createForm<IBodyCreateUserProfileApiV1UsersPost>({
        initialValues: {
            email: "",
            full_name: "",
            password: "",
        },
        onSubmit: (formData: IBodyCreateUserProfileApiV1UsersPost): Promise<IUser> => (
            useApi().createUserProfileApiV1UsersPost(formData)
        ),
        onSuccess: (response, context) => {
            // location.reload()
        },
    })
}
