import type { HeaderLink } from "~/widgets/header"

import IconCart from "virtual:icons/common/cart"
import IconEnvelope from "virtual:icons/common/envelope"
import IconHeart from "virtual:icons/common/heart"

import { RouteLink } from "$lib"

export let headerUserLinks: HeaderLink[] = [
    {
        Icon: IconCart,
        url: RouteLink.CART,
    },
    {
        Icon: IconEnvelope,
        url: RouteLink.MESSAGES,
    },
    {
        Icon: IconHeart,
        url: RouteLink.FAVORITES,
    },
]
