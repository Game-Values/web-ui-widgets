import type { GameRaw } from "#schema/data-contracts"

export interface LikedGameRaw extends Pick<GameRaw, "created" | "id" | "modified"> {
    gid: string
    liked: boolean
    uid: string
}

export class LikedGame implements LikedGameRaw {
    @Expose()
    declare public created: string

    @Expose()
    declare public gid: string

    @Expose()
    declare public id: string

    @Expose()
    declare public liked: boolean

    @Expose()
    declare public modified: string

    @Expose()
    declare public uid: string
}
