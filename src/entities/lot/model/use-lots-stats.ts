import type { ILotStat } from "~/entities/lot"

import IconCube from "virtual:icons/common/cube"
import IconMoney from "virtual:icons/common/money"
import IconUser from "virtual:icons/common/user"
import IconUsers from "virtual:icons/common/users"

type IUseLotsStats = {
    lotsStats: ILotStat[]
}

let lotsStats: ILotStat[] = [
    {
        count: 6_748,
        icon: IconCube,
        label: "number of lots",
    },
    {
        count: 398_053,
        icon: IconMoney,
        label: "amount of deals",
    },
    {
        count: 246_761,
        icon: IconUser,
        label: "online",
    },
    {
        count: 1_758_904,
        icon: IconUsers,
        label: "all",
    },
]

export function useLotsStats(): IUseLotsStats {
    return {
        lotsStats,
    }
}
