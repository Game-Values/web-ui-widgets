import { assign, identity, keys, omit, pickBy } from "lodash-es"

export function cleanObject<T extends object>(target: T, predicate: (value: any) => any = identity): T {
    return pickBy(target, predicate) as T
}

export function refreshObject<T extends object>(target: T, newObj: T): T {
    omit(target, keys(target))
    assign(target, newObj)

    return target
}
