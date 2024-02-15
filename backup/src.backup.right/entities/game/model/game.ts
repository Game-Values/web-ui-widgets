import type { IGame, IUserLike } from "~/shared/model"

import { api } from "~/shared/api"

export function getGameById(gameId: string): Promise<IGame> {
    return api.readGameApiV1GamesGameIdGet(gameId)
}

export function likeGame(gameId: string): Promise<IUserLike> {
    return api.likeGameEndpointApiV1UsersLikeGamePost(gameId)
}

export function dislikeGame(gameId: string): Promise<IUserLike> {
    return api.dislikeGameEndpointApiV1UsersDislikeGamePost(gameId)
}
