import type { IRouteWithLabel } from "$types"

export type IFooterLink = {
    label: "Company" | "Help" | "Services"
    links: IRouteWithLabel[]
}
