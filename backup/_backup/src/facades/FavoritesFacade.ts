import type { FacadeAbstract } from "~/abstract"
import type { GameController } from "~/controllers"

export class FavoritesFacade implements FacadeAbstract {
    public constructor(
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._gameController.fetchGames(),
        ])
    }
}
