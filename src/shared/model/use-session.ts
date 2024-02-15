import type { HttpCookie } from "$lib/enums"
import type { IToken, IUser } from "$schema/api"
import type { ISession, IValueOfEnum } from "$types"
import type { Readable, Writable } from "svelte/store"

import { merge } from "lodash-es"
import { derived, get, writable } from "svelte/store"

import { onClient } from "$lib/helpers"
import { useCookies } from "$model"

type IUseSession = {
    authenticated: Readable<boolean>
    getSession(): ISession
    login(token: IToken): void
    logout(): void
    setSession(session: ISession): void
    updateSession(session: Partial<ISession>): void
    user: Readable<IUser>
}

let session: Writable<ISession> = writable(Object.create(null))

export function useSession(): IUseSession {
    let { deleteCookies, setCookie } = useCookies()

    let use: IUseSession = {
        authenticated: derived(session, ($session: ISession): boolean => "user" in $session),

        getSession: (): ISession => get(session),

        login: (token: IToken): void => {
            Object
                .entries(token)
                .forEach(([key, val]): void => setCookie(key as IValueOfEnum<HttpCookie>, val))
            onClient((): void => location.reload())
        },

        logout: (): void => {
            deleteCookies()
            onClient((): void => location.reload())
        },

        setSession: (newSession: ISession): void => session.set(newSession),

        updateSession: (updatedSession: Partial<ISession>): void => (
            session.set(
                merge(use.getSession(), updatedSession),
            )
        ),

        user: derived(session, ($session: ISession): IUser => (
            $session.user || Object.create(null)
        )),
    }

    return use
}
