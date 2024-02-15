import type { IBodyLoginWithOauth2ApiV1LoginOauthPost, IToken } from "~/shared/model"
import type { Writable } from "svelte/store"

import { writable } from "svelte/store"

import { api } from "~/shared/api"

export let authByOauth2Form: Writable<IBodyLoginWithOauth2ApiV1LoginOauthPost> = writable({
    password: "",
    username: "",
})

export function authByOauth2(
    payload: IBodyLoginWithOauth2ApiV1LoginOauthPost,
): Promise<IToken> {
    return api.loginWithOauth2ApiV1LoginOauthPost(payload)
}
