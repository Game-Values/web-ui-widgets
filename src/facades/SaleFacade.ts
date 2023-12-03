import type { FacadeAbstract } from "~/abstract"
import type { RouterClient, StoreClient } from "~/clients"
import type { GameController } from "~/controllers"

export class SaleFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.gameStore.$dispose()
        this._storeClient.gamesStore.$dispose()
        this._storeClient.saleStore.$dispose()

        let promises: Promise<void>[] = [
            this._gameController.fetchGames(),
        ]

        let gameId: string = this._routerClient.getRouteQuery("gameId")
        if (gameId)
            promises.push(
                this._gameController.fetchGame(gameId),
            )

        await Promise.all(promises)

        this._storeClient.saleStore.saleRaw.gid = this._storeClient.gameStore.game.id

        useMerge(this._storeClient.saleStore.saleRaw, {
            attributes: {
                type: this._routerClient.getRouteQuery("itemType"),
            },
            gid: (
                this._routerClient.getRouteQuery("gameId") ||
                this._storeClient.gameStore.game.id
            ),
        })
    }
}
