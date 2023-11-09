import type { FacadeAbstract } from "~/abstract"
import type { GameController } from "~/controllers"

export class MainFacade implements FacadeAbstract {
    public constructor(
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        await this._gameController.fetchGames()
    }
}
