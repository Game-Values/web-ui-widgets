import type { IIconLink } from "$types"

import IconBinance from "virtual:icons/common/binance"
import IconMastercard from "virtual:icons/common/mastercard"
import IconPaypal from "virtual:icons/common/paypal"
import IconVisa from "virtual:icons/common/visa"
import IconWebmoney from "virtual:icons/common/webmoney"

import { PaymentMethod } from "$lib"

export let footerPaymentMethods: Omit<IIconLink, "url">[] = [
    {
        Icon: IconVisa,
        title: PaymentMethod.VISA,
    },
    {
        Icon: IconMastercard,
        title: PaymentMethod.MASTERCARD,
    },
    {
        Icon: IconBinance,
        title: PaymentMethod.BINANCE,
    },
    {
        Icon: IconPaypal,
        title: PaymentMethod.PAYPAL,
    },
    {
        Icon: IconWebmoney,
        title: PaymentMethod.WEBMONEY,
    },
]
