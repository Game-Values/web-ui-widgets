import type { ItemType } from "~/enums"
import type { Route } from "~/types"

export class Section {
    @Expose()
    declare public count: number

    // todo: rename to type
    @Expose()
    declare public name: string

    public get gameRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.PUBLIC_GAME, {
            params: {
                itemType: this.type,
            },
        })
    }

    public get isActive(): boolean {
        let { routerClient } = useClients()

        return routerClient.getRouteParam<ItemType>("itemType") === this.type
    }

    public get sellRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.PRIVATE_GAME_ITEM_SELL, {
            params: {
                itemType: this.type,
            },
        })
    }

    public get type(): ItemType {
        return this.name as ItemType
    }
}
