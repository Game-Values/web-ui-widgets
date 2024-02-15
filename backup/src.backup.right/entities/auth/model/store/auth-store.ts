import type { IToken } from "~/shared/model"
import type { Readable, Writable } from "svelte/store"

import { derived, writable } from "svelte/store"

import { removeAuthCookies } from "~/entities/auth"

export let authToken: Writable<IToken> = writable({
    access_token: "",
    chat_token: "",
    chat_uid: "",
    refresh_token: "",
    token_type: "",
})

export let isAuthorized: Readable<boolean> = derived(authToken, (
    ($authToken: IToken): boolean => Boolean($authToken.access_token)
))

export function logout(): void {
    removeAuthCookies()
    location.reload()
}
