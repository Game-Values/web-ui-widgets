import type { IGame, IUser, IUserLike } from "$schema/api"
import type { ICallableLazy } from "$types"
import type { IGameSection } from "~/entities/game"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { getGameIcon, getGameImage, getGameSections, mapGamesIds } from "~/entities/game"

import { useApi } from "$api"
import { useSession } from "$model"

type IUseGame = {
    dislikeGame(): Promise<IUserLike>
    gameIcon: string
    gameImage: string
    gameLiked: Readable<boolean>
    gameSections: Record<string, ICallableLazy<IGameSection>>
    likeGame(): Promise<IUserLike>
}

export function useGame(game: IGame): IUseGame {
    let {
        dislikeGameEndpointApiV1UsersDislikeGamePost,
        likeGameEndpointApiV1UsersLikeGamePost,
    } = useApi()

    let { user } = useSession()

    let gameId: string = (game.gid || game.id)!

    return {
        dislikeGame: (): Promise<IUserLike> => (
            dislikeGameEndpointApiV1UsersDislikeGamePost(gameId)
        ),

        gameIcon: getGameIcon(game),

        gameImage: getGameImage(game),

        gameLiked: derived(user, ($user: IUser): boolean => (
            mapGamesIds($user.liked_games || []).includes(gameId)
        )),

        gameSections: getGameSections(game),

        likeGame: (): Promise<IUserLike> => (
            likeGameEndpointApiV1UsersLikeGamePost(gameId)
        ),
    }
}
