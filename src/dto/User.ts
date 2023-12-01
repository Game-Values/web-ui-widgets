import type { UserRaw } from "#schema/data-contracts"
import type { LikedGameRaw } from "~/dto/LikedGame"

import { LikedGames } from "~/dto/LikedGames"

export class User implements UserRaw {
    @Expose()
    @IsDefined()
    @IsEmail()
    @IsNotEmpty()
    declare public email: string

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public email_validated: boolean

    @Expose()
    @IsDefined()
    @IsString()
    declare public full_name: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public id: string

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public is_active: boolean

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public is_superuser: boolean

    @Expose()
    @Transform(({ value }: { value: LikedGameRaw[] }): LikedGames => new LikedGames(value || []))
    @IsDefined()
    @IsArray()
    declare public liked_games: LikedGames

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public password: boolean

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public totp: boolean
}
