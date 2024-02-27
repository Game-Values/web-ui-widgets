import { error } from "@sveltejs/kit"

import { HttpStatus } from "$lib/enums"
import { useSession } from "$model"

/**
 * @throwable
 */
export function withAuth(): void {
    let { getSession } = useSession()

    let { user } = getSession()

    if (!user)
        throw error(HttpStatus.FORBIDDEN)
}
