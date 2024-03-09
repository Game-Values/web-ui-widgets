import type { IForm, IFormOptions } from "$types"
import type { SubmitContext } from "@felte/core"

import { createForm } from "felte"

import { useEventDispatcher } from "$model"

export function useForm<
    Data extends Record<string, any>,
    Ext extends Record<string, any> = never
>(options: IFormOptions<Data, Ext>): IForm<Data, Ext> {
    let { dispatchEvent: dispatchSubmitEvent } = useEventDispatcher<Data>("submit")

    return createForm<Data, Ext>({
        ...options,

        onSubmit: async (data: Data, context: SubmitContext<Data>): Promise<any> => {
            let result: any
            if (options.onSubmit)
                result = await options.onSubmit(data, context)

            await dispatchSubmitEvent(data)

            return result
        },
    }) as never
}
