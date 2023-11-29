import type { GameRaw } from "#schema/data-contracts"

import { Attributes } from "~/dto/Attributes"

export class Game implements GameRaw {
    @Expose()
    @Type((): typeof Attributes => Attributes)
    @IsDefined()
    @IsInstance(Attributes)
    declare public attributes: Attributes

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
