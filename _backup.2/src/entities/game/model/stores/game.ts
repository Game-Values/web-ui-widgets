import type { IGameRaw } from "@/schema/data-contracts"
import type { IGame } from "~/entities/game"
import type { UnwrapRef } from "vue"

import { useMeModel } from "~/entities/me"
import { api } from "~/shared/api"
import { refreshObject } from "~/shared/lib"

export let useGameModel = defineStore("gameModel", () => {
    let meModel = useMeModel()

    let game: UnwrapRef<IGame> = reactive(Object.create(null))

    function isLikedGame(gameId: string = game.id): boolean {
        return meModel.me.liked_games.includes(gameId)
    }

    async function fetchGame(gameId: string = game.id): Promise<void> {
        let gameRaw: IGameRaw = await api.readGameApiV1GamesGameIdGet(gameId)
        refreshObject(game, gameRaw)
    }

    async function toggleLikeGame(gameId: string = game.id): Promise<void> {
        if (isLikedGame(gameId))
            await api.dislikeGameEndpointApiV1UsersDislikeGamePost(gameId)
        else
            await api.likeGameEndpointApiV1UsersLikeGamePost(gameId)
    }

    async function toggleLikeWithRefreshGame(): Promise<void> {
        await toggleLikeGame()
        await fetchGame()
    }

    return {
        game,
        isLikedGame,
        toggleLikeGame,
        toggleLikeWithRefreshGame,
    }
})
