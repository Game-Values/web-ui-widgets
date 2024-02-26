import type {
    IItem,
    IOrderCreate,
    IOrderInDB,
    IPaymentError,
    IPaymentNew,
    IPaymentResponse,
} from "$schema/api"
import type { IForm } from "$types"
import type { ILotNewOrderPageContext } from "~/pages/lot"

import { createForm } from "felte"
import { get } from "svelte/store"

import { useApi } from "$api"
import { goto } from "$app/navigation"
import { Currency } from "$lib/enums"
import { useContext, useRoute, useSession } from "$model"

type ILotsNewOrderForm = {
    order: Required<IOrderCreate>
    payment: Required<IPaymentNew>
}

export function useLotsNewOrderForm(): IForm<ILotsNewOrderForm> {
    let { createOrderApiV1OrderPost, createPaymentApiV1FundsCreatePaymentPost } = useApi()
    let { context } = useContext<ILotNewOrderPageContext>()
    let { user } = useSession()

    return createForm<ILotsNewOrderForm>({
        initialValues: {
            order: {
                attributes: {
                    currency: Currency.EUR,
                    customer_id: get(user).id,
                },
                game_id: get(context).game.gid || get(context).game.id,
                owner_id: get(context).lot.owner_id,
            },
        },

        onSubmit: async (data: ILotsNewOrderForm): Promise<IOrderInDB> => createOrderApiV1OrderPost(data.order),

        onSuccess: (order: IOrderInDB): Promise<void> => {
            let { route } = useRoute("/purchases/[orderId]", { orderId: order.id })

            return goto(get(route))
        },
    })
}
