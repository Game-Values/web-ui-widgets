import type { IGame, IUser } from "$schema/api"

import { remove } from "lodash-es"

type IUseUser = {
    addLikedGame(game: IGame): void
    deleteLikedGame(game: IGame): void
}

export function useUser(user: IUser): IUseUser {
    return {
        addLikedGame: (game: IGame): void => (
            user.liked_games.push(
                Object.assign(game, { gid: game.gid || game.id }),
            )
        ),

        deleteLikedGame: (game: IGame): void => {
            remove(user.liked_games, (_game: IGame): boolean => (
                (_game.gid || _game.id) === (game.gid || game.id)
            ))
        },
    }
}
