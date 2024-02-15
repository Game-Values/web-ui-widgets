import type { IRoomEvent } from "matrix-js-sdk"

import { CollectionAbstract } from "~/abstract"
import { ChatEvent } from "~/dto/ChatEvent"

export class ChatEvents extends CollectionAbstract<ChatEvent, IRoomEvent> {
    protected get __Model(): typeof ChatEvent {
        return ChatEvent
    }

    public getRoomEvents(roomId: string): ChatEvent[] {
        return useFilter(this, (chatEvent: ChatEvent): boolean => (
            chatEvent.getRoomId() === roomId
        ))
    }
}
