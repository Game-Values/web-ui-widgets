import type { FacadeAbstract } from "~/abstract"
import type { RouterClient } from "~/clients"
import type { FacetController, GameController, ItemController } from "~/controllers"
import type { FacetQuery } from "~/types"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _facetController: FacetController,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async bootstrap(): Promise<void> {
        let promises: Promise<void>[] = [
            this._gameController.fetchGame(this._routerClient.getRouteParam("gameId")),
        ]

        let facetQuery: FacetQuery = useFacetQuery()
        if (isEmpty(facetQuery))
            promises.push(
                this._itemController.fetchItems({
                    gid: this._routerClient.getRouteParam("gameId"),
                }),
            )
        else
            promises.push(
                this._facetController.search(facetQuery),
            )

        await Promise.all(promises)
    }
}
