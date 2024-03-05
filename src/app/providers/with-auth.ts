import type { ISession } from "$types"

import { error } from "@sveltejs/kit"

import { HttpStatus } from "$lib/enums"
import { useSession } from "$model"

/**
 * @throwable
 */
export function withAuth(session: ISession = useSession().getSession()): void {
    if (!session.user)
        throw error(HttpStatus.FORBIDDEN)
}
