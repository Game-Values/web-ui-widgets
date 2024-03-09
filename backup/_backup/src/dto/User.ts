import type { UserRaw } from "#schema/data-contracts"

import { LikedGame } from "~/dto/LikedGame"
import { LikedGames } from "~/dto/LikedGames"
import { createCollection } from "~/factories"

export class User implements UserRaw {
    @Expose()
    declare public chat_id: string

    @Expose()
    declare public email: string

    @Expose()
    declare public email_validated: boolean

    @Expose()
    declare public full_name: string

    @Expose()
    declare public id: string

    @Expose()
    declare public is_active: boolean

    @Expose()
    declare public is_superuser: boolean

    @Expose()
    @Transform(({ value }: { value: LikedGame[] }): LikedGames => createCollection(LikedGames, value || []))
    declare public liked_games: LikedGames

    @Expose()
    declare public password: boolean

    @Expose()
    declare public totp: boolean
}
