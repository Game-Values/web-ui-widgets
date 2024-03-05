import type { IRouteWithLabel } from "$types"

export let userLinks: IRouteWithLabel[] = [
    {
        label: "Storefront",
        url: "/u/[userId]/storefront",
    },
    {
        label: "Reviews",
        url: "/u/[userId]/reviews",
    },
]
