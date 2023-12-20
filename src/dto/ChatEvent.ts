import type { IEvent, MatrixEvent } from "matrix-js-sdk"

import { ChatSender } from "~/dto/ChatSender"

interface ChatEventRaw extends Pick<MatrixEvent, (
    "event" |
    "getRoomId"
)> {
    sender: ChatSender
}

export class ChatEvent implements ChatEventRaw {
    @Expose()
    declare public event: IEvent

    @Expose()
    declare public getRoomId: () => string

    @Expose()
    @Type((): typeof ChatSender => ChatSender)
    declare public sender: ChatSender
}
