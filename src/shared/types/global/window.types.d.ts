import type { ICallable } from "$types"

declare global {
    interface Window {
        dataLayer?: any[]
        global?: typeof globalThis
        gtag?: ICallable<any>
    }
}
