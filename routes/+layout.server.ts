import type { ServerLoadEvent } from "@sveltejs/kit"
import type { IAppLayoutData } from "~/widgets/layout"

export function load(event: ServerLoadEvent): IAppLayoutData {
    return {
        session: event.locals.session,
    }
}
