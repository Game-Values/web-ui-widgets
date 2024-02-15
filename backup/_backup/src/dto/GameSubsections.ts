import type { GameSubsectionRaw } from "~/types"

import { CollectionAbstract } from "~/abstract"
import { GameSubsection } from "~/dto/GameSubsection"

export class GameSubsections extends CollectionAbstract<GameSubsection, GameSubsectionRaw> {
    protected get __Model(): typeof GameSubsection {
        return GameSubsection
    }
}
