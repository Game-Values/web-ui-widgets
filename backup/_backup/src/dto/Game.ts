import type { GameRaw } from "#schema/data-contracts"
import type { Route } from "~/types"

import { GameAttributes } from "~/dto/GameAttributes"

export class Game implements GameRaw {
    @Expose()
    @Type((): typeof GameAttributes => GameAttributes)
    declare public attributes: GameAttributes

    @Expose()
    declare public created: string

    @Expose()
    declare public id: string

    @Expose()
    declare public is_active: boolean

    @Expose()
    declare public modified: string

    @Expose()
    declare public name: string

    public get image(): string {
        return `/images/${useKebabCase(this.name)}.png`
    }

    public get jsonFilename(): string {
        return useKebabCase(this.name)
    }

    public get route(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.GAME, {
            params: {
                gameId: this.id,
                gameSection: this.attributes.sections.active.name,
            },
        })
    }
}
