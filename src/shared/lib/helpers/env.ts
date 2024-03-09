import type { ICallable, ICallableLazy } from "$types"

import { browser } from "$app/environment"

export function onClient(cb: ICallable | ICallableLazy): Promise<void> | void {
    let result: Promise<void> | undefined | void
    if (browser)
        result = cb()

    return result
}

export function onServer(cb: ICallable | ICallableLazy): Promise<void> | void {
    let result: Promise<void> | undefined | void
    if (!browser)
        result = cb()

    return result
}
