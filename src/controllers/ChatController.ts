import type { StoreClient } from "#build/clients"
import type { ChatService } from "~/services"

export class ChatController {
    public constructor(
        private _chatService: ChatService,
    ) {}

    public async fetchChatRooms(): Promise<void> {
        await this._chatService.fetchChatRooms()
    }

    public async sendRoomMessage(roomId: string, message: string): Promise<void> {
        await this._chatService.sendRoomMessage(roomId, message)
    }

    public async startChat(): Promise<void> {
        await this._chatService.startChat()
    }

    public async subscribeChat(): Promise<void> {
        await this._chatService.subscribeChat()
    }
}
