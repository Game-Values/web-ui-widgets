import { dislikeGame, likeGame } from "~/entities/game"

export async function gameLikeToggle(
    gameId: string,
    isGameLiked: boolean,
): Promise<void> {
    if (isGameLiked)
        await dislikeGame(gameId)
    else
        await likeGame(gameId)
}
