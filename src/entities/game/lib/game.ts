import type { IGame } from "$schema/api"
import type { ICallableLazy } from "$types"
import type { IGameSection } from "~/entities/game"

import { kebabCase } from "lodash-es"

const ASYNC_GAME_SECTIONS: Record<string, ICallableLazy<IGameSection>> = (
    import.meta.glob("~/entities/game/data/sections/**/*.ts")
)

export function getGameIcon(game: IGame): string {
    return `~/app/assets/icons/game/${kebabCase(game.name)}.svg`
}

export function getGameImage(game: IGame): string {
    return `~/app/assets/images/game/${kebabCase(game.name)}.png`
}

export function getGameSections(game: IGame): Record<string, ICallableLazy<IGameSection>> {
    let gameName: string = kebabCase(game.name)

    return Object.entries(ASYNC_GAME_SECTIONS)
        .filter(([filepath]): boolean => filepath.includes(gameName))
        .reduce((result, [filepath, module]): Record<string, ICallableLazy<IGameSection>> => {
            let gameSection: string = filepath.replace(/.*\/|\.ts[^.]*$/g, "")

            return Object.assign(result, { [gameSection]: module })
        }, {})
}
