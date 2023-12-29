import type { Section } from "~/dto/Section"

import { GameSections } from "~/dto/GameSections"

export class GameAttributes {
    @Expose()
    declare public description: string

    @Expose()
    declare public lots: string

    @Expose()
    @Transform(({ value }: { value: Section[] }): GameSections => new GameSections(value))
    declare public sections: GameSections

    @Expose()
    declare public servers: string[]
}
