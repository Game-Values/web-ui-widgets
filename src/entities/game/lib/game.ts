import type { IGame } from "$api"
import type { IGameCategory } from "~/entities/game"

import { kebabCase } from "lodash-es"

import { asyncModule } from "$lib/helpers"

type IGameCategoriesModule = {
    Categories: Record<string, string>
}

export async function resolveGameCategories(game: IGame): Promise<string[]> {
    let filepath: string = (
        `~/entities/game/data/${kebabCase(game.name)}/enums/categories.ts`
    )

    let module: IGameCategoriesModule = (
        await asyncModule<IGameCategoriesModule>(filepath)
    )

    return Object.values(module.Categories)
}

export function resolveGameCategory(
    game: IGame,
    gameCategory: string,
): Promise<IGameCategory> {
    let filepath: string = (
        `~/entities/game/data/${kebabCase(game.name)}/categories/${kebabCase(gameCategory)}.ts`
    )

    return asyncModule(filepath)
}

export function resolveGameIcon(game: IGame): Promise<string> {
    let filepath: string = `~/app/assets/icons/game/${kebabCase(game.name)}.svg`

    return asyncModule(filepath)
}
