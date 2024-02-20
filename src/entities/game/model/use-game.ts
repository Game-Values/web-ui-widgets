import type { IGame, IUser, IUserLike } from "$schema/api"
import type { IEnhancedImageSrc } from "$types"
import type { IGameSections } from "~/entities/game"
import type { Readable } from "svelte/store"

import { derived } from "svelte/store"

import { fetchGameSections, getGameIcon, getGameImage, mapGamesIds } from "~/entities/game"

import { useApi } from "$api"
import { useSession } from "$model"

type IUseGame = {
    dislikeGame(): Promise<IUserLike>
    fetchGame(): Promise<IGame>
    fetchGameSections(): Promise<IGameSections>
    gameIcon: IEnhancedImageSrc
    gameImage: IEnhancedImageSrc
    gameLiked: Readable<boolean>
    likeGame(): Promise<IUserLike>
}

export function useGame(game: IGame): IUseGame {
    let {
        dislikeGameEndpointApiV1UsersDislikeGamePost,
        getAvailableFacetsApiV1ItemsFacetsGameIdGet,
        likeGameEndpointApiV1UsersLikeGamePost,
        readGameApiV1GamesGameIdGet,
    } = useApi()

    let { user } = useSession()

    let gameId: string = (game.gid || game.id)!

    return {
        dislikeGame: (): Promise<IUserLike> => (
            dislikeGameEndpointApiV1UsersDislikeGamePost(gameId)
        ),

        fetchGame: (): Promise<IGame> => readGameApiV1GamesGameIdGet(gameId),

        fetchGameSections: async (): Promise<IGameSections> => {
            let gameFacetsPromise: Promise<IGameSections> = getAvailableFacetsApiV1ItemsFacetsGameIdGet(gameId)
            let gameSectionsPromise: Promise<string[]> = fetchGameSections(game)

            let [gameFacets, gameSections]: [IGameSections, string[]] = (
                await Promise.all([
                    gameFacetsPromise,
                    gameSectionsPromise,
                ])
            )

            return gameSections.reduce((result: IGameSections, gameSection: string): IGameSections => (
                Object.assign(result, { [gameSection]: gameFacets[gameSection] || 0 })
            ), {})
        },

        gameIcon: getGameIcon(game),

        gameImage: getGameImage(game),

        gameLiked: derived(user, ($user: IUser): boolean => (
            mapGamesIds($user.liked_games || []).includes(gameId)
        )),

        likeGame: (): Promise<IUserLike> => (
            likeGameEndpointApiV1UsersLikeGamePost(gameId)
        ),
    }
}
