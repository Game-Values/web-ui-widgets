import type { IUser } from "$api"
import type { Readable, Writable } from "svelte/store"

import { derived, writable } from "svelte/store"

import { useToken } from "$model"

type ISession = {
    isAuthenticated: Readable<boolean>
    logout(): void
    user: Writable<IUser>
}

type ISessionPayload = {
    user: IUser
}

let user: Writable<IUser> = writable<IUser>(Object.create(null))

let isAuthenticated: Readable<boolean> = derived(user, ($user: IUser | undefined): boolean => (
    Boolean($user?.id)
))

function logout(): void {
    useToken().cleanupTokens()
    location.reload()
}

export function updateSession(sessionPayload: ISessionPayload): void {
    user.set(sessionPayload.user)
}

export function useSession(): ISession {
    return {
        isAuthenticated,
        logout,
        user,
    }
}
