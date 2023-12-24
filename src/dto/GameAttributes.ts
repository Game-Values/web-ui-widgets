import type { Section } from "~/dto/Section"

import { Sections } from "~/dto/Sections"

export class GameAttributes {
    @Expose()
    declare public description: string

    @Expose()
    declare public lots: string

    // todo: rm
    @Expose()
    @Transform(({ value }: { value: Section[] }): Sections => new Sections(value))
    declare public sections: Sections

    @Expose()
    declare public servers: string[]
}
