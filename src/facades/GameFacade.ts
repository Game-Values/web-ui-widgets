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

        let promises: Promise<void>[] = [
            this._gameController.fetchGame(this._routerClient.getRouteParam("gameId")),
            this._facetController.fetchFacets(this._routerClient.getRouteParam("gameId")),
        ]

        await Promise.all(promises)
        await this._gameController.fetchGameSections()

        if (
            !this._routerClient.getRouteParam("gameSection") &&
            useFirst(useKeys(this._storeClient.gameStore.gameSectionsRaw))
        )
            await navigateTo(
                {
                    params: {
                        gameSection: useFirst(useKeys(this._storeClient.gameStore.gameSectionsRaw)),
                    },
                },
                {
                    replace: true,
                },
            )

        if (this._routerClient.getRouteParam("gameSection"))
            await this._facetController.searchFacets(this._routerClient.getRouteParam("gameId"), (
                useFacetQuery({
                    [Facet.TYPE]: this._routerClient.getRouteParam("gameSection"),
                })
            ))
    }
}
