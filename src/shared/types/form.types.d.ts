import type { Form, FormConfigWithoutTransformFn, KnownHelpers, KnownStores, Paths, SubmitContext } from "@felte/core"
import type { MaybePromise } from "@sveltejs/kit"
import type { Readable } from "svelte/store"

export type IForm<
    Data extends Record<string, any>,
    Ext extends Record<string, any> = never
> =
    Form<Data> &
    KnownHelpers<Data, Paths<Data>> &
    KnownStores<Data, Ext> &
    {
        data: Readable<Data>
        onSuccess: (result: Ext, context: SubmitContext<Data>) => MaybePromise<void>
    }

export type IFormOptions<
    Data extends Record<string, any>,
    Ext extends Record<string, any>
> = Omit<FormConfigWithoutTransformFn<Data>, "onSuccess"> & {
    onSubmit?: (data: Data, context: SubmitContext<Data>) => MaybePromise<any>
    onSuccess?: (result: Ext, context: SubmitContext<Data>) => MaybePromise<void>
}

export type IFormSelectOption = {
    disabled?: boolean
    label: string
    value: string
}
