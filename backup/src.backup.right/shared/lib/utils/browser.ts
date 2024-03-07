import type { MaybePromise } from "@sveltejs/kit"
import type { TCallable, TCallableLazy } from "~/shared/lib"

import { browser } from "$app/environment"

export function onClientOnly(cb: TCallable | TCallableLazy): Promise<void> | void {
    return (
        browser
            ? cb()
            : Promise.resolve()
    )
}

function onElementVisible(element: HTMLElement): Promise<IntersectionObserver>

function onElementVisible(element: HTMLElement, callback: TCallable): IntersectionObserver

function onElementVisible(
    element: HTMLElement,
    callback?: TCallable,
): MaybePromise<IntersectionObserver> {
    let observer: IntersectionObserver = new IntersectionObserver((
        (entries: IntersectionObserverEntry[], _observer: IntersectionObserver): void => {
            let intersectedEntries: IntersectionObserverEntry[] = (
                entries.filter((entry: IntersectionObserverEntry): boolean => (
                    entry.intersectionRatio > 0
                ))
            )

            intersectedEntries.forEach((): void => {
                callback?.(element)
                _observer.disconnect()
            })
        }
    ))

    observer.observe(element)

    return (
        callback
            ? observer
            : new Promise((resolve: TCallable): TCallable => (
                // eslint-disable-next-line no-param-reassign
                callback = resolve
            )) as Promise<IntersectionObserver>
    )
}

export {
    onElementVisible,
}
