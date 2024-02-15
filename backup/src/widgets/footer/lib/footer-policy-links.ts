import type { ILabelLink } from "$types"

import { RouteLink } from "$lib"

export let footerPolicyLinks: ILabelLink[] = [
    {
        label: "Privacy Policy",
        url: RouteLink.HOME + "1",
    },
    {
        label: "End-User License Agreement",
        url: RouteLink.HOME  + "2",
    },
    {
        label: "Agency Agreement",
        url: RouteLink.HOME  + "3",
    },
]
