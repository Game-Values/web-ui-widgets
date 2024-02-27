import type { IItem } from "$schema/api"
import type { ILotsListPageData } from "~/pages/lot"

import { useApi } from "$api"
import { useSession } from "$model"

export async function load({ fetch, parent }): Promise<ILotsListPageData> {
    await parent()

    let { readAllItemsApiV1ItemsAllGet } = useApi({ customFetch: fetch })
    let { getSession } = useSession()

    let { user } = getSession()

    let lotsPromise: Promise<IItem[]> = readAllItemsApiV1ItemsAllGet({ owner: user!.id })

    return {
        pagePromise: Promise.all([lotsPromise]),
    }
}
