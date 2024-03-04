import { withAuth } from "~/app/providers"

export async function load(): Promise<void> {
    return withAuth()
}
