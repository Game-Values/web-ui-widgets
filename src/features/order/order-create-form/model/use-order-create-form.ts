import type { IOrderCreate, IOrderInDB, IPaymentNew } from "$schema/api"
import type { IForm } from "$types"
import type { RecursivePartial } from "@felte/core"

import { useApi } from "$api"
import { goto } from "$app/navigation"
import { useForm, useRoute } from "$model"

type ILotsNewOrderForm = {
    order: Required<IOrderCreate>
    payment: Required<IPaymentNew>
}

export function useOrderCreateForm(
    initialValues: RecursivePartial<ILotsNewOrderForm>,
): IForm<ILotsNewOrderForm, IOrderInDB> {
    let { createOrderApiV1OrderPost } = useApi()

    return useForm<ILotsNewOrderForm, IOrderInDB>({
        initialValues,

        onSubmit: async (data: ILotsNewOrderForm): Promise<IOrderInDB> => (
            createOrderApiV1OrderPost(data.order)
        ),

        onSuccess: (order: IOrderInDB): Promise<void> => (
            goto(
                useRoute("/order/purchases/[orderId]", { orderId: order.id })
                    .getRoute(),
            )
        ),
    })
}
