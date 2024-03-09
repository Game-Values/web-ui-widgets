import type { IGame } from "$schema/api"
import type { IEnhancedImageSrc } from "$types"

import { kebabCase } from "lodash-es"

import { lazyModule } from "$lib/helpers"

export function fetchGameSections(game: IGame): Promise<string[]> {
    return lazyModule<string[]>(`~/entities/game/data/sections/${kebabCase(game.name)}.ts`)
}

export function getGameIcon(game: IGame): IEnhancedImageSrc {
    return `icons/game/${kebabCase(game.name)}.svg`
}

export function getGameImage(game: IGame): IEnhancedImageSrc {
    return `images/game/${kebabCase(game.name)}.png`
}
