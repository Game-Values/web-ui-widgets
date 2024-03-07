import type { ISession } from "~/shared/lib"
import type { Readable, Writable } from "svelte/store"

import { isEmpty } from "lodash-es"
import { derived, writable } from "svelte/store"

export let session: Writable<ISession> = writable(Object.create(null))

export let isAuthenticated: Readable<boolean> = (
    derived(session, ($session: ISession): boolean => (
        !isEmpty($session.user) && Boolean($session.user.id)
    ))
)
