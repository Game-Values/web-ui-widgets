import type { Nullable } from "~/types"
import type { RoomMember } from "matrix-js-sdk"

type ChatSenderRaw = Pick<RoomMember, (
    "getAvatarUrl" |
    "name"
)>

export class ChatSender implements ChatSenderRaw {
    @Expose()
    declare public getAvatarUrl: (baseUrl: string, width: number, height: number) => Nullable<string>

    @Expose({
        name: "userId",
    })
    declare public id: string

    @Expose()
    declare public name: string

    public get displayName(): string {
        return useLowerCase(
            this.name
                .replace(/^@/, "")
                .replace(new RegExp(`:${useRuntimeConfig().public.matrixChatName}$`), ""),
        )
    }
}
