import type { ServerLoadEvent } from "@sveltejs/kit"
import type { IDefaultLayoutData } from "~/app/layouts"

export function load(event: ServerLoadEvent): IDefaultLayoutData {
    return {
        session: event.locals.session,
    }
}
