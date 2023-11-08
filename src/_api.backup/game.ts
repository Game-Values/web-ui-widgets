import type { GameLikeToggle } from "~/types"

import { api } from "~/api/core"

export const GameAPI = {
    async likeToggle(id: GameLikeToggle["id"]) {
        return useFetch<GameLikeToggle>(`${api.url()}/game/like/${id}`, {
            method: "POST",
        },
        )},
}
