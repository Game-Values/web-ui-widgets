import type { IDrawerLink } from "~/widgets/drawer"

import IconArchiveDown from "virtual:icons/common/archive-down"
import IconArchiveUpError from "virtual:icons/common/archive-up-error"
import IconMoney from "virtual:icons/common/money"
import IconUser2 from "virtual:icons/common/user-2"
import IconEnvelopeSolid from "virtual:icons/heroicons/envelope-solid"
import IconHeartSolid from "virtual:icons/heroicons/heart-solid"

export let drawerLinks: IDrawerLink[] = [
    {
        icon: IconArchiveDown,
        label: "Sales",
        url: "/order/sales",
    },
    {
        icon: IconArchiveUpError,
        label: "Purchases",
        url: "/order/purchases",
    },
    {
        divider: true,
        icon: IconUser2,
        iconClass: "scale-90",
        label: "Referral program",
        url: "/referral",
    },
    {
        divider: true,
        icon: IconEnvelopeSolid,
        label: "Messages",
        url: "/messages",
    },
    {
        divider: true,
        icon: IconMoney,
        iconClass: "text-info",
        label: "Funds",
        url: "/funds",
    },
    {
        icon: IconHeartSolid,
        iconClass: "text-negative-light",
        label: "Favorites",
        url: "/favorites",
    },
]
