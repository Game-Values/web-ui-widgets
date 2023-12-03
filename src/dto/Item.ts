import type { ItemRaw as _ItemRaw } from "#schema/data-contracts"
import type { Route } from "~/types"

import { ItemAttributes } from "~/dto/ItemAttributes"

interface ItemRaw extends Omit<_ItemRaw, "attributes"> {
    attributes: ItemAttributes
}

export class Item implements ItemRaw {
    @Expose()
    @Type((): typeof ItemAttributes => ItemAttributes)
    @IsDefined()
    @IsInstance(ItemAttributes)
    declare public attributes: ItemAttributes

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public created: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public gid: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public id: string

    @Expose()
    @IsDefined()
    @IsBoolean()
    declare public is_active: boolean

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public modified: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public name: string

    @Expose()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    declare public owner_id: string

    @Memoize()
    public get isUserMeItem(): boolean {
        let { storeClient } = useClients()

        return (
            storeClient.userMeStore.authenticated &&
            storeClient.userMeStore.user.id === this.owner_id
        )
    }

    public get itemRoute(): Route {
        let { routerClient } = useClients()

        if (this.isUserMeItem)
            return routerClient.getRoute(routerClient.routeNames.ACCOUNT_SALE_EDIT, {
                params: {
                    itemId: this.id,
                },
            })

        return routerClient.getRoute(routerClient.routeNames.GAME_ITEM_ORDER, {
            params: {
                gameId: this.gid,
                itemId: this.id,
                itemType: this.attributes.type,
            },
        })
    }

    public get userRoute(): Route {
        let { routerClient } = useClients()

        if (this.isUserMeItem)
            return routerClient.getRoute(routerClient.routeNames.ACCOUNT)

        return routerClient.getRoute(routerClient.routeNames.USER, {
            params: {
                userId: this.owner_id,
            },
        })
    }
}
