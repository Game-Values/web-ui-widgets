import type { IKeyOf } from "$types"

const API_URL: string = getEnv("VITE_API_URL")

const CANONICAL_URL: string = getEnv("VITE_CANONICAL_URL")

const MATRIX_GUEST_ID: string = getEnv("VITE_MATRIX_GUEST_ID")

const MATRIX_GUEST_TOKEN: string = getEnv("VITE_MATRIX_GUEST_TOKEN")

const MATRIX_HUB_ROOM_ID: string = getEnv("VITE_MATRIX_HUB_ROOM_ID")

const MATRIX_URL: string = getEnv("VITE_MATRIX_URL")

/**
 * @throwable
 */
function getEnv(key: IKeyOf<ImportMetaEnv>): string {
    let envVar: string | undefined = import.meta.env[key]
    if (!envVar)
        throw Error(`Env variable <${key}> is required`)

    return envVar
}

export {
    API_URL,
    CANONICAL_URL,
    MATRIX_GUEST_ID,
    MATRIX_GUEST_TOKEN,
    MATRIX_HUB_ROOM_ID,
    MATRIX_URL,
}
