import type { IAuthSignupForm } from "~/entities/auth"
import type { IBodyCreateUserProfileApiV1UsersPost, IUser } from "~/shared/model"
import type { Writable } from "svelte/store"

import { writable } from "svelte/store"

import { api } from "~/shared/api"

export let authSignupForm: Writable<IAuthSignupForm> = writable({
    agreeWithPolicies: true,
    email: "",
    full_name: "",
    password: "",
    repeatPassword: "",
    sendNotifications: true,
})

export function authSignup(
    payload: IBodyCreateUserProfileApiV1UsersPost,
): Promise<IUser> {
    return api.createUserProfileApiV1UsersPost(payload)
}
