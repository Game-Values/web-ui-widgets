import type { Form } from "@felte/core"
import type { Readable } from "svelte/store"

export type IForm<Data extends Record<string, any>> = Form<Data> & {
    data: Readable<Data>
}
