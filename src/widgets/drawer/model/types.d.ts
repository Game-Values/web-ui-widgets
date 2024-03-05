import type { IRouteWithLabelAndIcon } from "$types"

export type IDrawerLink = IRouteWithLabelAndIcon & {
    divider?: boolean
    iconClass?: string
}
