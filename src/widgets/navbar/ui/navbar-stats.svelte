<script lang="ts">
import type { IRouteWithIcon, IRouteWithLabel } from "$types"

import { formatNum } from "$lib/utils"

import IconCube from "virtual:icons/common/cube"
import IconMoney from "virtual:icons/common/money"
import IconUser from "virtual:icons/common/user"
import IconUsers from "virtual:icons/common/users"

interface $$Props {
    class?: string
}

type IStat = Pick<IRouteWithIcon, "icon"> & Pick<IRouteWithLabel, "label"> & {
    iconClass?: string
    value: number
}

let className: string = ""

let stats: IStat[] = [
    {
        icon: IconCube,
        iconClass: "scale-125",
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

export {
    className as class,
}
</script>

<ul class="stats gap-x-4 overflow-hidden {className}">
    {#each stats as stat (stat.label)}
        <li class="stat p-0 gap-x-3 border-transparent">
            <span class="stat-figure col-start-1 text-accent text-3xl">
                <svelte:component
                    this={stat.icon}
                    class={stat.iconClass}
                />
            </span>

            <span class="stat-value col-start-2 text-base">
                {formatNum(stat.value)}
            </span>

            <span class="stat-title col-start-2 capitalize text-sm">
                {stat.label}
            </span>
        </li>
    {/each}
</ul>
