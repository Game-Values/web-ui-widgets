import type { ICallable } from "$types"

import { identity, pickBy } from "lodash-es"

export function cleanObject<T extends object = object>(
    target: T,
    predicate: ICallable = identity,
): T {
    return pickBy(target, predicate) as T
}
