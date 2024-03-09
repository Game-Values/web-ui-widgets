import type { Token } from "$lib"

export interface ITokenModel {
    get(key: Token): string | undefined
    getAll(): Record<Token, string>
    getRequestHeaders(): HeadersInit
    set(key: Token, val: string): void
    setAll(tokens: Record<Token, string>): void
}
