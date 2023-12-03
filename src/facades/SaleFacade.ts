import type { FacadeAbstract } from "~/abstract"
import type { RouterClient } from "~/clients"
import type { GameController } from "~/controllers"

export class SaleFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        let promises: Promise<void>[] = [
            this._gameController.fetchGames(),
        ]

        let gameId: string = this._routerClient.getRouteQuery("gameId")
        if (gameId)
            promises.push(
                this._gameController.fetchGame(gameId),
            )

        await Promise.all(promises)
    }
}
