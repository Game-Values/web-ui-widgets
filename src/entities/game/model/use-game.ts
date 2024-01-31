import type { IGame } from "$api"
import type { IGameCategory } from "~/entities/game"

import {
    resolveGameCategories,
    resolveGameCategory,
    resolveGameIcon,
} from "~/entities/game/lib/game"

type IUseGame = {
    fetchCategories(): Promise<string[]>
    fetchCategory(gameCategory: string): Promise<IGameCategory>
    fetchIcon(): Promise<string>
}

export function useGame(game: IGame): IUseGame {
    return {
        fetchCategories: (): Promise<string[]> => resolveGameCategories(game),
        fetchCategory: (gameCategory: string): Promise<IGameCategory> => (
            resolveGameCategory(game, gameCategory)
        ),
        fetchIcon: (): Promise<string> => resolveGameIcon(game),
    }
}
