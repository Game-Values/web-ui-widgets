import type { IGame } from "$api"

import { kebabCase } from "lodash-es"

import { asyncModule } from "$lib/helpers"

export function resolveGameIcon(game: IGame): Promise<string> {
    let filepath: string = `~/app/assets/icons/game/${kebabCase(game.name)}.svg`

    return asyncModule(filepath)
}
