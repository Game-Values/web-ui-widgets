import type { IFormSelectOption, IRouteWithIcon } from "$types"

type IStat = (
    Partial<Pick<IRouteWithIcon, "icon">> &
    Required<Pick<IFormSelectOption, "label" | "value">> &
    {
        iconClass?: string
    }
)
