import type { ICallable } from "$types"
import type { MaybePromise } from "@sveltejs/kit"

function onElementVisible(element: HTMLElement): Promise<IntersectionObserver>

function onElementVisible(element: HTMLElement, callback: ICallable): IntersectionObserver

function onElementVisible(
    element: HTMLElement,
    callback?: ICallable,
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
            : new Promise((resolve: ICallable): void => {
                // eslint-disable-next-line no-param-reassign
                callback = resolve
            })
    )
}

export {
    onElementVisible,
}
