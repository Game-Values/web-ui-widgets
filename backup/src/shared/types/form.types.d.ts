import type { Form } from "@felte/core"
import type { Readable } from "svelte/store"
import type { SubmitContext } from "@felte/common/dist/esm/types"

export type IForm<
    Data extends Record<string, any>,
    Response = unknown,
> = Form<Data> & {
    data: Readable<Data>
}
