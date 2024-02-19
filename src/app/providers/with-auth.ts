import type { ISession } from "$types"

import { error } from "@sveltejs/kit"

import { HttpStatus } from "$lib/enums"

/**
 * @throwable
 */
export function withAuth(session: ISession): void {
    if (!session.user)
        throw error(HttpStatus.FORBIDDEN)
}
