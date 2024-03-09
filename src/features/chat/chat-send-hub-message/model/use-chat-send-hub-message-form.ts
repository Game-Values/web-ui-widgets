import type { IForm } from "$types"
import type { SubmitContext } from "@felte/core"

import { useEventDispatcher, useForm } from "$model"

type IChatSendHubMessageForm = {
    message: string
}

export function useChatSendHubMessageForm(): IForm<IChatSendHubMessageForm> {
    let { dispatchEvent: dispatchMessageEvent } = useEventDispatcher<string>("message")

    return useForm<IChatSendHubMessageForm, never>({
        onSubmit: (data: IChatSendHubMessageForm): Promise<string> => (
            dispatchMessageEvent(data.message)
        ),

        onSuccess: (_: never, context: SubmitContext<IChatSendHubMessageForm>): void => (
            context.reset()
        ),
    })
}
