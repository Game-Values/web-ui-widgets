import { identity, pickBy } from "lodash-es"

export function cleanObject<T extends object>(
    queryParams: any,
    predicate: (value: any) => any = identity<T>,
): T {
    return pickBy<T>(queryParams, predicate) as T
}
