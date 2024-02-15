export function cleanObject<T extends object>(target: T, predicate: (value: any) => any = useIdentity): T {
    return usePickBy(target, predicate) as T
}

export function refreshObject<T extends object>(target: T, newObj: T): void {
    useOmit(target, useKeys(target))
    useAssign(target, newObj)
}
