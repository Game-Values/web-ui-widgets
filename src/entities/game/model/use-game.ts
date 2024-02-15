import type { IGame, IUser, IUserLike } from "$schema/api"
import type { Readable } from "svelte/store"

import { isString } from "lodash-es"
import { derived } from "svelte/store"

import { mapGamesIds } from "~/entities/game"

import { useApi } from "$api"
import { useSession } from "$model"

type IUseGame = {
    dislikeGame(): Promise<IUserLike>
    liked: Readable<boolean>
    likeGame(): Promise<IUserLike>
}

export function useGame(gameId: string): Promise<IUseGame>
export function useGame(game: IGame): IUseGame
export function useGame(gameOrGameId: IGame | string): IUseGame | Promise<IUseGame> {
    let {
        dislikeGameEndpointApiV1UsersDislikeGamePost,
        likeGameEndpointApiV1UsersLikeGamePost,
        readGameApiV1GamesGameIdGet,
    } = useApi()

    let { user } = useSession()

    let gameId: string = (gameOrGameId as IGame).id || gameOrGameId as string

    let use: IUseGame = {
        dislikeGame: (): Promise<IUserLike> => (
            dislikeGameEndpointApiV1UsersDislikeGamePost(gameId)
        ),

        liked: derived(user, ($user: IUser): boolean => (
            mapGamesIds($user.liked_games || []).includes(gameId)
        )),

        likeGame: (): Promise<IUserLike> => (
            likeGameEndpointApiV1UsersLikeGamePost(gameId)
        ),
    }

    return (
        isString(gameOrGameId)
            ? readGameApiV1GamesGameIdGet(gameOrGameId).then((): IUseGame => use)
            : use
    )
}
