import type { IGame } from "$schema/api"

import { kebabCase } from "lodash-es"

import { asyncModule } from "$lib/helpers"

export function fetchGameSections(game: IGame): Promise<string[]> {
    return asyncModule<string[]>(`~/entities/game/data/sections/${kebabCase(game.name)}.ts`)
}

export function getGameIcon(game: IGame): string {
    return `~/app/assets/icons/game/${kebabCase(game.name)}.svg`
}

export function getGameImage(game: IGame): string {
    return `~/app/assets/images/game/${kebabCase(game.name)}.png`
}
