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

        let gameId: string = this._routerClient.getRouteParam("gameId")
        let gameSection: string = this._routerClient.getRouteParam("gameSection")

        await Promise.all([
            this._gameController.fetchGame(gameId),
            this._facetController.fetchFacets(gameId),
        ])

        await this._gameController.fetchGameSections()

        await navigateTo({
            replace: true,
            params: {
                gameSection: (
                    gameSection ||
                    useFirst(
                        useKeys(this._storeClient.gameStore.gameSectionsRaw),
                    )
                )
            },
        })

        await this._facetController.searchFacets(gameId, (
            useFacetQuery({
                [Facet.TYPE]: (
                    gameSection ||
                    useFirst(
                        useKeys(this._storeClient.gameStore.gameSectionsRaw),
                    )
                ),
            })
        ))
    }
}
