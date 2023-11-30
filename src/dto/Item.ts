import type { ItemRaw } from "#schema/data-contracts"

import { ItemAttributes } from "~/dto/ItemAttributes"

export class Item implements ItemRaw {
    @Expose()
    @Type((): typeof ItemAttributes => ItemAttributes)
    @IsDefined()
    @IsInstance(ItemAttributes)
    declare public attributes: ItemAttributes

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
