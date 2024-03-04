import type { IStat } from "$types"

import { formatNum } from "$lib/utils"

import IconCube from "virtual:icons/common/cube"
import IconMoney from "virtual:icons/common/money"
import IconUser from "virtual:icons/common/user"
import IconUsers from "virtual:icons/common/users"

export let navbarStats: IStat[] = [
    {
        icon: IconCube,
        iconClass: "scale-125",
        label: "number of lots",
        value: formatNum(6_748),
    },
    {
        icon: IconMoney,
        label: "amount of deals",
        value: formatNum(398_053),
    },
    {
        icon: IconUser,
        label: "online",
        value: formatNum(246_761),
    },
    {
        icon: IconUsers,
        label: "all",
        value: formatNum(1_758_904),
    },
]
