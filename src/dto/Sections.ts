import { CollectionAbstract } from "~/abstract"
import { Section } from "~/dto/Section"

export class Sections extends CollectionAbstract<Section, Section> {
    protected __Model: typeof Section = Section
}
