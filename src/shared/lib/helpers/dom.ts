import type { ICallable } from "$types"
import type { MaybePromise } from "@sveltejs/kit"

export function observeElement(
    target: HTMLElement,
    callback: (element: HTMLElement, mutation: MutationRecord) => void,
    options: Partial<Record<MutationRecordType, boolean>>,
): MutationObserver {
    let observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]): void => (
        mutations
            .filter((mutation: MutationRecord): boolean => Boolean(options[mutation.type]))
            .forEach((mutation: MutationRecord): void => callback(target, mutation))
    ))

    observer.observe(target, options)

    return observer
}

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
