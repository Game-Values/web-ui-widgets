import { ItemType } from "~/enums"

export class ItemAttributes {
    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public count: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public description: string

    @Expose()
    @IsDefined()
    @IsCurrency()
    @IsNotEmpty()
    declare public price: number

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public server: string

    @Expose()
    @IsDefined()
    @IsEnum(ItemType)
    @IsNotEmpty()
    declare public type: ItemType
}
