declare module "felte" {
    import type { IForm } from "$types"
    import type { FormConfigWithoutTransformFn, SubmitContext } from "@felte/core"

    type IFormConfig<Data> = Omit<FormConfigWithoutTransformFn<Data>, "onSuccess">

    export declare function createForm<
        Data extends Record<string, any> = Record<string, any>,
        Response = unknown,
    >(config?: IFormConfig<Data> & {
        onSuccess?: (res: Response, context: SubmitContext<Data>) => Promise<void> | void
    }): IForm<Data>
}
