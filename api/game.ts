import {
    IGameLikeToggle,
  } from "@/api/interfaces/game"

import { api } from "./core"

export const GameAPI = {
  async likeToggle(id: string) {
    return useFetch<IGameLikeToggle>(`${api.url()}/game/like/${id}`, {
        method: "POST",
    }
  )},
}
