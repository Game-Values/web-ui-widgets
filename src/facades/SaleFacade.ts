import type { FacadeAbstract } from "~/abstract"
import type { GameController } from "~/controllers"

export class SaleFacade implements FacadeAbstract {
    public constructor(
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        let promises: Promise<void>[] = [
            this._gameController.fetchGames(),
        ]

        let gameId: string = useGet(useRoute().query, "gameId", "")
        if (gameId)
            promises.push(
                this._gameController.fetchGame(gameId),
            )

        await Promise.all(promises)
    }
}
