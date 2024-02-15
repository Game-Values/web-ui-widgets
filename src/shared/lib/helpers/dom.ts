import type { ICallable } from "$types"
import type { MaybePromise } from "@sveltejs/kit"

export function onElementVisible(element: HTMLElement): Promise<IntersectionObserver>
export function onElementVisible(element: HTMLElement, callback: ICallable): IntersectionObserver
export function onElementVisible(
    element: HTMLElement,
    callback?: ICallable,
): MaybePromise<IntersectionObserver> {
    let observer: IntersectionObserver = new IntersectionObserver((
        (entries: IntersectionObserverEntry[]): void => (
            entries
                .filter((entry: IntersectionObserverEntry): boolean => entry.intersectionRatio > 0)
                .forEach(() => {
                    callback?.(element)
                    observer.disconnect()
                })
        )
    ))

    observer.observe(element)

    if (!callback)
        return new Promise((resolve: ICallable): void => {
            // eslint-disable-next-line no-param-reassign
            callback = resolve
        })

    return observer
}
