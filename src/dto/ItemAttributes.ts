import { GameSection } from "~/enums"

export class ItemAttributes {
    @Expose()
    declare public count: number

    @Expose()
    declare public description: string

    @Expose()
    declare public price: number

    @Expose()
    declare public server: string

    @Expose()
    @Type((): typeof GameSection => GameSection)
    declare public type: GameSection
}
