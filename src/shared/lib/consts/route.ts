import type { IRouteMeta, IRouteUrl } from "$types"

export const ROUTE_META: Partial<Record<IRouteUrl, IRouteMeta>> = {
    "/policy/agreement": {
        title: "Agency Agreement",
        zip: "zip/agreement-policy.zip",
    },

    "/policy/license": {
        title: "End-User License Agreement",
        zip: "zip/license-policy.zip",
    },

    "/policy/privacy": {
        title: "Privacy Policy",
        zip: "zip/privacy-policy.zip",
    },
}
