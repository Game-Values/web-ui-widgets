import type { LikedGameRaw } from "~/dto/LikedGame"

import { CollectionAbstract } from "~/abstract"
import { LikedGame } from "~/dto/LikedGame"

export class LikedGames extends CollectionAbstract<LikedGame, LikedGameRaw> {
    protected get __Model(): typeof LikedGame {
        return LikedGame
    }

    public get likedIds(): string[] {
        return useMap(this, "gid")
    }
}
