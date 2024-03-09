import type { MaybePromise } from "@sveltejs/kit"
import type { TCallable } from "~/shared/lib"

import { filter, forEach } from "lodash-es"

function onElementVisible(element: HTMLElement): Promise<IntersectionObserver>

function onElementVisible(element: HTMLElement, callback: TCallable): IntersectionObserver

function onElementVisible(element: HTMLElement, callback?: TCallable): MaybePromise<IntersectionObserver> {
    let observer: IntersectionObserver = new IntersectionObserver((
        (entries: IntersectionObserverEntry[], _observer: IntersectionObserver): void => {
            let intersectedEntries: IntersectionObserverEntry[] = (
                filter(entries, (entry: IntersectionObserverEntry): boolean => (
                    entry.intersectionRatio > 0
                ))
            )

            forEach(intersectedEntries, (): void => {
                callback?.(element)
                _observer.disconnect()
            })
        }
    ))

    observer.observe(element)

    if (!callback)
        return new Promise((resolve: TCallable) => callback = resolve)

    return observer
}

export {
    onElementVisible,
}
