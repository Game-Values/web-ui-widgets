import type { FacadeAbstract } from "~/abstract"
import type { RouterClient } from "~/clients"
import type { FacetController, GameController } from "~/controllers"
import type { FacetQuery } from "~/types"

import { Facet } from "~/enums"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _facetController: FacetController,
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        let facetQuery: FacetQuery = useFacetQuery({
            [Facet.TYPE]: this._routerClient.getRouteParam("itemType"),
        })
        let gameId: string = this._routerClient.getRouteParam("gameId")

        let promises: Promise<void>[] = [
            this._gameController.fetchGame(gameId),
            this._facetController.fetchFacets(gameId),
            this._facetController.searchFacets(gameId, facetQuery),
        ]

        await Promise.all(promises)
    }
}
