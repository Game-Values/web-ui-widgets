import type { FacadeAbstract } from "~/abstract"
import type { ChatController, GameController } from "~/controllers"

export class MainFacade implements FacadeAbstract {
    public constructor(
        private _chatController: ChatController,
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        let promises: Promise<void>[] = [
            this._gameController.fetchGames(),
        ]

        if (isClient())
            promises.push(
                this._chatController.startChat(),
            )

        await Promise.all(promises)
    }
}
