<script lang="ts">
import type { IOrderInDB } from "$schema/api"

import { OrderTableRow } from "~/entities/order"

import { Empty } from "$ui/data"

interface $$Props {
    orders: IOrderInDB[]
    title?: string
}

interface $$Slots {
    title: NonNullable<unknown>
}

export let orders: IOrderInDB[]

export let title: string | undefined = undefined
</script>

<div class="gap-y-4 flex flex-col">
    <table class="table table-zebra">
        {#if title}
            <caption class="mb-4 font-bold text-left text-2xl">
                <slot name="title">
                    {title}
                </slot>
            </caption>
        {/if}

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
                <OrderTableRow {order} />
            {/each}
        </tbody>
    </table>

    {#if !orders.length}
        <Empty />
    {/if}
</div>
