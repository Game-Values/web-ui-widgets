import type { HttpHeader } from "$lib/enums"

export interface IHeaders extends Headers {
    get(key: `${HttpHeader}`): null | string
    has(key: `${HttpHeader}`): boolean
    set(key: `${HttpHeader}`, val: string): void
}
