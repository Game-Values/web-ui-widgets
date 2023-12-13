import type { ItemRaw as _ItemRaw } from "#schema/data-contracts"
import type { Route } from "~/types"

import { ItemAttributes } from "~/dto/ItemAttributes"

interface ItemRaw extends Omit<_ItemRaw, "attributes"> {
    attributes: ItemAttributes
}

export class Item implements ItemRaw {
    @Expose()
    @Type((): typeof ItemAttributes => ItemAttributes)
    declare public attributes: ItemAttributes

    @Expose()
    declare public created: string

    @Expose()
    declare public gid: string

    @Expose()
    declare public id: string

    @Expose()
    declare public is_active: boolean

    @Expose()
    declare public modified: string

    @Expose()
    declare public name: string

    @Expose()
    declare public owner_id: string

    public get buyRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.PUBLIC_GAME_ITEM_BUY, {
            params: {
                gameId: this.gid,
                itemId: this.id,
                itemType: this.attributes.type,
            },
        })
    }

    public get editRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.PRIVATE_GAME_ITEM_SELL_EDIT, {
            params: {
                gameId: this.gid,
                itemId: this.id,
                itemType: this.attributes.type,
            },
        })
    }

    @Memoize()
    public get isUserMeItem(): boolean {
        let { storeClient } = useClients()

        return (
            storeClient.userMeStore.user.id === this.owner_id &&
            isAuthenticated()
        )
    }

    public get sellRoute(): Route {
        let { routerClient } = useClients()

        return routerClient.getRoute(routerClient.routeNames.PRIVATE_GAME_ITEM_SELL, {
            params: {
                gameId: this.gid,
                itemType: this.attributes.type,
            },
        })
    }

    public get userRoute(): Route {
        let { routerClient } = useClients()

        if (this.isUserMeItem)
            return routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT)

        return routerClient.getRoute(routerClient.routeNames.PUBLIC_USER, {
            params: {
                userId: this.owner_id,
            },
        })
    }
}
