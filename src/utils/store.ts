import type { DefineStore } from "~/types"

export function mergeStores(...stores: DefineStore<any, any, any, any>[]): void {
    let mergedStores: DefineStore<any, any, any, any>[] = useDropRight(stores)
    let storesRefs: DefineStore<any, any, any, any>[] = useMap(mergedStores, storeToRefs)

    return useAssign(
        useOmit(
            ...mergedStores,

            useKeys(...storesRefs),
        ),

        ...useMap(
            mergedStores,
            storeToRefs,
        ),

        useLast(stores),
    )
}
