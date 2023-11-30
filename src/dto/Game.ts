import type { GameRaw } from "#schema/data-contracts"

import { GameAttributes } from "~/dto/GameAttributes"

export class Game implements GameRaw {
    @Expose()
    @Type((): typeof GameAttributes => GameAttributes)
    @IsDefined()
    @IsInstance(GameAttributes)
    declare public attributes: GameAttributes

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public created: string

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
    @IsString()
    @IsNotEmpty()
    declare public modified: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public name: string
}
