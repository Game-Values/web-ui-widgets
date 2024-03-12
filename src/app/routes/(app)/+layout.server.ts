import type { IDefaultLayoutData } from "~/layouts"

import { withAuth } from "~/app/providers"

export async function load({ locals, route }): Promise<IDefaultLayoutData> {
    if (/\(session\)/.test(route.id))
        withAuth(locals.session)

    return {
        session: locals.session,
    }
}
