import type { ServerLoadEvent } from "@sveltejs/kit"

import { error } from "@sveltejs/kit"

import { HttpStatus } from "$lib"

/**
 * @throwable
 */
export function load(event: ServerLoadEvent) {
    if (!event.locals.session.user)
        throw error(HttpStatus.FORBIDDEN)
}
