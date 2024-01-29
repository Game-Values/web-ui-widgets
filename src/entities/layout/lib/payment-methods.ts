import type { IIconLink } from "$types"

import IconBinance from "virtual:icons/common/binance"
import IconMastercard from "virtual:icons/common/mastercard"
import IconPaypal from "virtual:icons/common/paypal"
import IconVisa from "virtual:icons/common/visa"
import IconWebmoney from "virtual:icons/common/webmoney"

export let paymentMethods: Omit<IIconLink, "url">[] = [
    {
        Icon: IconVisa,
    },
    {
        Icon: IconMastercard,
    },
    {
        Icon: IconBinance,
    },
    {
        Icon: IconPaypal,
    },
    {
        Icon: IconWebmoney,
    },
]
