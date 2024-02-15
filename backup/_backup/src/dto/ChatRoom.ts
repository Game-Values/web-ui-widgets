import type { IPublicRoomsChunkRoom } from "matrix-js-sdk"

export class ChatRoom implements Omit<IPublicRoomsChunkRoom, "room_id"> {
    @Expose()
    declare public guest_can_join: boolean

    @Expose({
        name: "room_id",
    })
    declare public id: string

    @Expose()
    declare public name: string

    @Expose()
    declare public num_joined_members: number

    @Expose()
    declare public world_readable: boolean
}
