import type { Form } from "@felte/core"
import type { Readable } from "svelte/store"

export type IForm<T extends Record<string, any>> = Form<T> & {
    data: Readable<T>
}
