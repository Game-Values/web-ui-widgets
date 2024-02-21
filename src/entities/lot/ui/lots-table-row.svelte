<script lang="ts">
import type { IItem } from "$schema/api"

import { formatPrice } from "$lib/utils"
import { useRoute } from "$model"
import { Avatar } from "$ui/data"

import IconArrowFatUp from "virtual:icons/common/arrow-fat-up"
import IconHandUp from "virtual:icons/common/hand-up"

interface $$Props {
    lot: IItem
}

let lot: IItem

let { route: userRoute } = useRoute("/u/[userId]", { userId: lot.owner_id })

export {
    lot,
}
</script>

<tr>
    <td>
        <div class="gap-x-3 flex items-center">
            <a href={$userRoute}>
                <Avatar
                    class="w-8"
                    username="Username"
                />
            </a>

            <div class="flex flex-col">
                <a
                    class="link link-hover"
                    href={$userRoute}
                >
                    Username
                </a>

                <span class="text-secondary">
                    0% comp. deals
                </span>

                <p class="gap-x-2 flex items-center">
                    <span class="gap-x-0.5 inline-flex items-center text-positive-light">
                        <IconHandUp class="text-xxs" />

                        <span>
                            0%
                        </span>
                    </span>

                    <span class="gap-x-0.5 inline-flex items-center text-accent">
                        <IconArrowFatUp class="text-xxs" />

                        <span>
                            1
                        </span>
                    </span>
                </p>
            </div>
        </div>
    </td>

    <td>
        <p class="flex flex-col">
            <a
                class="link link-hover"
                href="javascript:void(0)"
            >
                <b>
                    {lot.name}
                </b>
            </a>

            <small class="text-secondary empty:(hidden)">
                {lot.attributes.description}
            </small>
        </p>
    </td>

    <td>
        {lot.attributes.amount}
    </td>

    <td>
        {formatPrice(lot.attributes.price || 0, lot.attributes.currency || "EUR")}
    </td>
</tr>
