import type { HeaderLink } from "~/widgets/header"

import { RouteLink } from "$lib"

export let headerLinks: HeaderLink[] = [
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
