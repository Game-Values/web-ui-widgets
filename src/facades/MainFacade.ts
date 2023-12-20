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

        if (isAuthenticated() && isClient())
            promises.push(
                this._chatController.fetchChatRooms(),
                this._chatController.startChat(),
                this._chatController.subscribeChat(),
            )

        await Promise.all(promises)
    }
}
