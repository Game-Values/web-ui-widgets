import { identity, pickBy } from "lodash-es"

export function cleanObject<T extends object>(
    target: T,
    predicate: (val: unknown) => unknown = identity,
): T {
    return pickBy(target, predicate) as T
}
