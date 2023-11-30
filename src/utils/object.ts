export function cleanObject<T = object>(
    queryParams: any,
    predicate: (value: any) => any = useIdentity,
): T {
    return usePickBy<T>(queryParams, predicate) as T
}
