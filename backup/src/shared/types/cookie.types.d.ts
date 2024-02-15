export interface ICookieAttributes {
    domain?: string | undefined
    expires?: Date | number | undefined
    name: string
    path?: string | undefined
    sameSite?: "lax" | "Lax" | "none" | "None" | "strict" | "Strict" | undefined
    secure?: boolean | undefined
    value: string
}
