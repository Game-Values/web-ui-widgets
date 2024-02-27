import { withAuth } from "~/app/providers"

export async function load({ parent }): Promise<void> {
    await parent()

    return withAuth()
}
