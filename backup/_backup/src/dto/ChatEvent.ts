import type { IContent, IEvent, MatrixEvent } from "matrix-js-sdk"

type ChatEventRaw = Pick<MatrixEvent, (
    "event" |
    "getContent" |
    "getDate" |
    "getId" |
    "getOriginalContent" |
    "getRoomId" |
    "getSender"
)>

export class ChatEvent implements ChatEventRaw {
    @Expose()
    declare public event: IEvent

    @Expose()
    declare public getContent: <T>() => T & IContent

    @Expose()
    declare public getDate: () => Date

    @Expose()
    declare public getId: () => string

    @Expose()
    declare public getOriginalContent: <T>() => T & IContent

    @Expose()
    declare public getRoomId: () => string

    @Expose()
    declare public getSender: () => string

    public get content(): string {
        return useGet(this.getContent<string>(), "body", "")
    }

    public get username(): string {
        return (
            this.getSender()
                .replace(/^@/, "")
                .replace(new RegExp(`:${useRuntimeConfig().public.matrixChatName}$`), "")
        )
    }
}
