import type { IGame, IUser } from "$schema/api"

type IUseUser = {
    addLikedGame(game: IGame): void
    deleteLikedGame(game: IGame): void
}

export function useUser(user: IUser): IUseUser {
    return {
        addLikedGame: (game: IGame): void => {
            user.liked_games = [...user.liked_games, Object.assign(game, { gid: game.gid || game.id })]
        },

        deleteLikedGame: (game: IGame): void => {
            user.liked_games = user.liked_games.filter(({ gid, id }: IGame): boolean => (
                (gid || id) !== (game.gid || game.id)
            ))
        },
    }
}
