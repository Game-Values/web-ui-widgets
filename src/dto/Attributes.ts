import type { Section } from "~/dto/Section"

import { Sections } from "~/dto/Sections"

export class Attributes {
    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public description: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public lots: string

    @Expose()
    @Transform(({ value }: { value: Section[] }): Sections => new Sections(value))
    @IsDefined()
    @IsInstance(Sections)
    declare public sections: Sections
}
