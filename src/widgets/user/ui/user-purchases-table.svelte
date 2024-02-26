<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { UserPurchaseTableRow } from "~/entities/user"

import { Empty } from "$ui/data"

interface $$Props {
    orders: IOrderInDB[]
}

export let orders: IOrderInDB[]
</script>

<div class="gap-y-4 flex flex-col">
    <table class="table table-zebra">
        <thead>
            <tr>
                <th>
                    #
                </th>

                <th>
                    Date
                </th>

                <th>
                    Game
                </th>

                <th>
                    Lot
                </th>

                <th>
                    Seller
                </th>

                <th>
                    Price
                </th>

                <th>
                    Status
                </th>
            </tr>
        </thead>

        <tbody>
            {#each orders as order (order.id)}
                <UserPurchaseTableRow {order} />
            {/each}
        </tbody>
    </table>

    {#if !orders.length}
        <Empty />
    {/if}
</div>
