import type { IDefaultLayoutData } from "~/layouts"

export async function load({ locals }): Promise<IDefaultLayoutData> {
    return {
        session: locals.session,
    }
}
