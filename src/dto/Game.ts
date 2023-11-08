import type { GameRaw } from "~/mocks/types"

export class Game implements GameRaw {
    @Expose()
    @IsDefined()
    @IsNumber()
    declare public count: number

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public icon: string

    @Expose()
    @IsDefined()
    @IsNumber()
    declare public id: number

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public liked: boolean

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public name: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public url: string
}
