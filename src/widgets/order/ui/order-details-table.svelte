<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { formatNum, formatPrice, humanizeDateWithTime } from "$lib/utils"
import { useRoute } from "$model"

let order: IOrderInDB

let { route: gameRoute } = useRoute("/g/[gameId]", { gameId: order.game_id })

export {
    order,
}
</script>

<table class="table table-zebra">
    <tbody>
        <tr>
            <td>
                Date
            </td>

            <td>
                {humanizeDateWithTime(order.created)}
            </td>
        </tr>

        <tr>
            <td>
                Game
            </td>

            <td>
                <a
                    class="link link-hover"
                    href={$gameRoute}
                >
                    {order.game_id}
                </a>
            </td>
        </tr>

        <tr>
            <td>
                Seller
            </td>

            <td>
                No data
            </td>
        </tr>

        <tr>
            <td>
                Amount
            </td>

            <td>
                {formatNum(order.attributes.amount)}
            </td>
        </tr>

        <tr>
            <td>
                Price
            </td>

            <td>
                {formatPrice(order.attributes.price, order.attributes.currency)}
            </td>
        </tr>

        <tr>
            <td>
                Status
            </td>

            <td>
                No data
            </td>
        </tr>
    </tbody>
</table>
