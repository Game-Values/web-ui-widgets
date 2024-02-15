<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"

import { formatNum } from "$lib/utils"

import IconCube from "virtual:icons/common/cube"
import IconMoney from "virtual:icons/common/money"
import IconUser from "virtual:icons/common/user"
import IconUsers from "virtual:icons/common/users"

type IStat = Pick<IRouteWithIcon, "icon"> & Pick<IRouteWithLabel, "label"> & {
    value: number
}

let stats: IStat[] = [
    {
        icon: IconCube,
        label: "number of lots",
        value: 6_748,
    },
    {
        icon: IconMoney,
        label: "amount of deals",
        value: 398_053,
    },
    {
        icon: IconUser,
        label: "online",
        value: 246_761,
    },
    {
        icon: IconUsers,
        label: "all",
        value: 1_758_904,
    },
]
</script>

<ul class="stats gap-x-4">
    {#each stats as stat (stat.label)}
        <li class="stat p-0 border-transparent">
            <span class="stat-figure col-start-1 text-accent text-3xl">
                <svelte:component this={stat.icon} />
            </span>

            <small class="stat-value col-start-2 text-sm">
                {formatNum(stat.value)}
            </small>

            <b class="stat-title col-start-2 capitalize">
                {stat.label}
            </b>
        </li>
    {/each}
</ul>
