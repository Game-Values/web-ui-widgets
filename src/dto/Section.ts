import type { GameSection } from "~/enums"
import type { Route } from "~/types"

export class Section {
    @Expose()
    declare public count: number

    // todo: rename to type
    @Expose()
    declare public name: string

    public get gameRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.GAME, {
            params: {
                gameSection: this.type,
            },
        })
    }

    public get isActive(): boolean {
        let { routerClient } = useClients()

        return routerClient.getRouteParam<GameSection>("gameSection") === this.type
    }

    public get sellRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.GAME_ITEM_SELL, {
            params: {
                gameSection: this.type,
            },
        })
    }

    public get type(): GameSection {
        return this.name as GameSection
    }
}
