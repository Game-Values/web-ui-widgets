import type { ILabelLink } from "$types"

import { RouteLink } from "$lib/enums"

export let headerLinks: ILabelLink[] = [
    {
        label: "Blog",
        url: RouteLink.BLOG,
    },
    {
        label: "Promotions",
        url: RouteLink.PROMOTIONS,
    },
    {
        label: "TOP-10",
        url: RouteLink.TOP_10,
    },
    {
        label: "AI Assistant",
        url: RouteLink.AI_ASSISTANT,
    },
]
