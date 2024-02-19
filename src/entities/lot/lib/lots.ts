import type { IGame } from "$schema/api"
import type { ILotsFilter } from "~/entities/lot"

import { kebabCase } from "lodash-es"

import { asyncModule } from "$lib/helpers"

export function fetchLotsFilters(game: IGame, gameSection: string): Promise<ILotsFilter[]> {
    return asyncModule(`~/entities/lot/data/filters/${kebabCase(game.name)}/${kebabCase(gameSection)}.ts`)
}
