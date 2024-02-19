import type { ServerLoadEvent } from "@sveltejs/kit"

import { withAuth } from "~/app/providers"

export function load(event: ServerLoadEvent): void {
    return withAuth(event.locals.session)
}
