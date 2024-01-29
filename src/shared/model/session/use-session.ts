import type { IUser } from "$api"
import type { ISession } from "$model/session"
import type { Readable, Writable } from "svelte/store"

import { derived, writable } from "svelte/store"

import { useToken } from "$model/token"

type IUseSession = {
    isAuthenticated: Readable<boolean>
    logout(): void
    update(session: ISession): void
    user: Writable<IUser>
}

let user: Writable<IUser> = writable<IUser>(Object.create(null))

let isAuthenticated: Readable<boolean> = derived(user, ($user: IUser | undefined): boolean => (
    Boolean($user?.id)
))

function logout(): void {
    useToken().cleanup()
    location.reload()
}

function update(session: ISession): void {
    if (session.user)
        user.set(session.user)
}

export function useSession(): IUseSession {
    return {
        isAuthenticated,
        logout,
        update,
        user,
    }
}
