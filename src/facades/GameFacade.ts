import type { FacadeAbstract } from "~/abstract"
import type { GameController } from "~/controllers"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        await this._gameController.fetchGame(useRoute().params.gameId)
    }
}
