import type { FacadeAbstract } from "~/abstract"
import type { RouterClient, StoreClient } from "~/clients"
import type { FacetController, GameController } from "~/controllers"

import { Facet } from "~/enums"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _facetController: FacetController,
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.facetsStore.$reset()
        this._storeClient.itemsStore.$reset()

        await Promise.all([
            this._gameController.fetchGame(this._routerClient.getRouteParam("gameId")),
            this._facetController.fetchFacets(this._routerClient.getRouteParam("gameId")),
        ])

        await this._gameController.fetchGameSections()

        await this._facetController.searchFacets(this._storeClient.gameStore.game.id, (
            useFacetQuery({
                [Facet.TYPE]: this._storeClient.gameStore.game.attributes.sections.active.name,
            })
        ))
    }
}
