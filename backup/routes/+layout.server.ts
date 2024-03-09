import type { ServerLoadEvent } from "@sveltejs/kit"

export function load(event: ServerLoadEvent) {
    return {
        session: event.locals.session,
    }
}
