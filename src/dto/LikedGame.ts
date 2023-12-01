import type { GameRaw } from "#schema/data-contracts"

export interface LikedGameRaw extends Pick<GameRaw, "created" | "id" | "modified"> {
    gid: string
    liked: boolean
    uid: string
}

export class LikedGame implements LikedGameRaw {
    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public created: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public gid: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public id: string

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public liked: boolean

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public modified: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public uid: string
}
