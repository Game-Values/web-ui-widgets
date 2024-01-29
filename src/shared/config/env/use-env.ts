import type { IValueOf } from "$types"

type IEnv = {
    API_URL: ImportMetaEnv["VITE_API_URL"]
}

/**
 * @throwable
 */
function env(key: keyof ImportMetaEnv): IValueOf<IEnv> {
    let envVar: string | undefined = import.meta.env[key]
    if (!envVar)
        throw Error(`Env variable <${key}> is required`)

    return envVar
}

export function useEnv(): IEnv {
    return {
        API_URL: env("VITE_API_URL"),
    }
}
