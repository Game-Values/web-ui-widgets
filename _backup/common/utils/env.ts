import { NodeEnv } from "../enums"

export function isDebug(): boolean {
    return process.env.DEBUG === "true"
}

export function isDevelopment(): boolean {
    return process.env.NODE_ENV === NodeEnv.DEVELOPMENT
}

export function isProduction(): boolean {
    return process.env.NODE_ENV === NodeEnv.PRODUCTION
}
