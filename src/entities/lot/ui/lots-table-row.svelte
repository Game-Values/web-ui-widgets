<script lang="ts">
import type { IItem } from "$schema/api"

import { formatNum, formatPrice } from "$lib/utils"
import { useRoute } from "$model"
import { Avatar } from "$ui/data"

import IconArrowFatUp from "virtual:icons/common/arrow-fat-up"
import IconHandUp from "virtual:icons/common/hand-up"

interface $$Props {
    lot: IItem
}

interface $$Slots {
    editLotButton: NonNullable<unknown>
}

let lot: IItem

let { route: userStorefrontRoute } = useRoute("/u/[userId]/storefront", { userId: lot.owner_id })
let { route: orderCreateRoute } = useRoute("/order/create/[lotId]", { lotId: lot.id })

export {
    lot,
}
</script>

<tr>
    <td>
        <div class="gap-x-3 flex items-center">
            <a href={$userStorefrontRoute}>
                <Avatar
                    class="w-8"
                    username="Username"
                />
            </a>

            <div class="flex flex-col">
                <a
                    class="link link-hover"
                    href={$userStorefrontRoute}
                >
                    Username
                </a>

                <small class="text-secondary">
                    0% comp. deals
                </small>

                <p class="gap-x-2 flex items-center">
                    <span class="gap-x-0.5 inline-flex items-center text-positive-light">
                        <i class="icon text-xxs">
                            <IconHandUp />
                        </i>

                        <small>
                            0%
                        </small>
                    </span>

                    <span class="gap-x-0.5 inline-flex items-center text-accent">
                        <i class="icon text-xxs">
                            <IconArrowFatUp />
                        </i>

                        <small>
                            1
                        </small>
                    </span>
                </p>
            </div>
        </div>
    </td>

    <td>
        <p class="inline-flex flex-col">
            <slot name="editLotButton">
                <a
                    class="link link-hover"
                    href={$orderCreateRoute}
                >
                    <b class="line-clamp-2">
                        {lot.name}
                    </b>
                </a>
            </slot>

            <small class="text-secondary line-clamp-2 empty:(hidden)">
                {lot.attributes.description}
            </small>
        </p>
    </td>

    <td>
        {formatNum(lot.attributes.amount)}
    </td>

    <td>
        {formatPrice(lot.attributes.price, lot.attributes.currency)}
    </td>
</tr>
