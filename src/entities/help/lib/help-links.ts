import type { IRouteWithLabelAndIcon } from "$types"

import IconChatBubbleOvalLeftEllipsisSolid from "virtual:icons/heroicons/chat-bubble-oval-left-ellipsis-solid"
import IconCog8ToothSolid from "virtual:icons/heroicons/cog-8-tooth-solid"
import IconCurrencyDollarSolid from "virtual:icons/heroicons/currency-dollar-solid"
import IconInformationCircleSolid from "virtual:icons/heroicons/information-circle-solid"

export let helpLinks: IRouteWithLabelAndIcon[] = [
    {
        icon: IconChatBubbleOvalLeftEllipsisSolid,
        label: "General Questions",
        url: "/help/general",
    },
    {
        icon: IconCurrencyDollarSolid,
        label: "Information for Sellers",
        url: "/help/sellers",
    },
    {
        icon: IconCog8ToothSolid,
        label: "Technical Information",
        url: "/help/technical",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Payment and Returns",
        url: "/help/payment",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Security",
        url: "/help/security",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Delivery and Receipt",
        url: "/help/delivery",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Ratings and Reviews",
        url: "/help/rating",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Affiliate Program",
        url: "/help/affiliate",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Working with AI Assistant",
        url: "/help/ai-assistant",
    },
    {
        icon: IconInformationCircleSolid,
        label: "Account and Settings",
        url: "/help/account",
    },
]
