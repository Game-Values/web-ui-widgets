import { withAuth } from "~/app/providers"

export function load({ locals }): void {
    return withAuth(locals.session)
}
