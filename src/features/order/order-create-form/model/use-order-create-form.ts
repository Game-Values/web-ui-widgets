import type { IOrderCreate, IOrderInDB, IPaymentNew } from "$schema/api"
import type { IForm } from "$types"
import type { RecursivePartial } from "@felte/core"

import { createForm } from "felte"
import { get } from "svelte/store"

import { useApi } from "$api"
import { goto } from "$app/navigation"
import { useRoute } from "$model"

type ILotsNewOrderForm = {
    order: Required<IOrderCreate>
    payment: Required<IPaymentNew>
}

export function useOrderCreateForm(initialValues: RecursivePartial<ILotsNewOrderForm>): IForm<ILotsNewOrderForm> {
    let { createOrderApiV1OrderPost } = useApi()

    return createForm<ILotsNewOrderForm>({
        initialValues,

        onSubmit: async (data: ILotsNewOrderForm): Promise<IOrderInDB> => createOrderApiV1OrderPost(data.order),

        onSuccess: (order: IOrderInDB): Promise<void> => {
            let { route } = useRoute("/order/purchases/[orderId]", { orderId: order.id })

            return goto(get(route))
        },
    })
}
