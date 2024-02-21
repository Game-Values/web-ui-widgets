import type { ICallable } from "$types"

declare global {
    interface Window {
        dataLayer?: any[]
        gtag?: ICallable<any>
    }
}
