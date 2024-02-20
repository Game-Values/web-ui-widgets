import type { Form, KnownHelpers, KnownStores, Paths } from "@felte/core"
import type { Readable } from "svelte/store"

export type IForm<Data extends Record<string, any>> =
    Form<Data> &
    KnownHelpers<Data, Paths<Data>> &
    KnownStores<Data> &
    {
        data: Readable<Data>
    }

export type IFormSelectOption = {
    disabled?: boolean
    label: string
    value: string
}
