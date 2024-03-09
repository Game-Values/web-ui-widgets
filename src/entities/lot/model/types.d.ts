import type { IValueOfEnum } from "$types"
import type { LotsFilterType } from "~/entities/lot"

export type ILotsFilter = {
    buckets?: ILotsFilterBucket[]
    info?: string
    name: string
    type: IValueOfEnum<LotsFilterType>
}

export type ILotsFilterBucket = {
    children?: ILotsFilter[]
    label: string
    tooltip?: string
    value: string
}

export type ILotsFiltersPayload = {
    type: string
}
