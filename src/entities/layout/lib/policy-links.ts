import type { ILabelLink } from "$types"

import { RouteLink } from "$lib/enums"

export let policyLinks: ILabelLink[] = [
    {
        label: "Privacy Policy",
        url: RouteLink.HOME + "1" as never,
    },
    {
        label: "End-User License Agreement",
        url: RouteLink.HOME  + "2" as never,
    },
    {
        label: "Agency Agreement",
        url: RouteLink.HOME  + "3" as never,
    },
]
