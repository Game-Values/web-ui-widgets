<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { formatPrice, humanizeDateWithTime } from "$lib/utils"
import { useRoute } from "$model"

interface $$Props {
    order: IOrderInDB
}

let order: IOrderInDB

let { route: gameRoute } = useRoute("/g/[gameId]", { gameId: order.game_id })
let { route: orderPurchaseRoute } = useRoute("/order/purchases/[orderId]", { orderId: order.id })

export {
    order,
}
</script>

<tr>
    <td>
        <a
            class="link link-hover"
            href={$orderPurchaseRoute}
        >
            {order.game_id.slice(0, 8)}
        </a>
    </td>

    <td>
        {humanizeDateWithTime(order.created)}
    </td>

    <td>
        <a
            class="link link-hover"
            href={$gameRoute}
        >
            {order.game_id.slice(0, 8)}
        </a>
    </td>

    <td>
        No data
    </td>

    <td>
        No data
    </td>

    <td>
        {formatPrice(order.attributes.price, order.attributes.currency)}
    </td>

    <td>
        No data
    </td>
</tr>
