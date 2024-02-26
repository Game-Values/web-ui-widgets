<script lang="ts">
import type { IUserPurchaseDetailsPageContext } from "~/pages/user"

import { formatNum, formatPrice, humanizeDateWithTime } from "$lib/utils"
import { useContext, useRoute } from "$model"

let { context } = useContext<IUserPurchaseDetailsPageContext>()

let { route: gameRoute } = useRoute("/g/[gameId]", { gameId: $context.order.game_id })
</script>

<table class="table table-zebra">
    <tbody>
        <tr>
            <td>
                Date
            </td>

            <td>
                {humanizeDateWithTime($context.order.created)}
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
                    {$context.order.game_id}
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
                {formatNum($context.order.attributes.amount)}
            </td>
        </tr>

        <tr>
            <td>
                Price
            </td>

            <td>
                {formatPrice($context.order.attributes.price, $context.order.attributes.currency)}
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
