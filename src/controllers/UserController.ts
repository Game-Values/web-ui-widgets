import type { StoreClient } from "#build/clients"
import type { UserRaw } from "#schema/data-contracts"
import type { UserService } from "~/services"

export class UserController {
    public constructor(
        private _userService: UserService,
        private _storeClient: StoreClient,
    ) {}

    public async dislikeGame(gameId: string): Promise<void> {
        await this._userService.dislikeGame(gameId)
        await this.fetchUser()
    }

    public async fetchUser(): Promise<void> {
        let userRaw: UserRaw = await this._userService.fetchUser()
        this._storeClient.meStore.setMeRaw(userRaw)
    }

    public async likeGame(gameId: string): Promise<void> {
        await this._userService.likeGame(gameId)
        await this.fetchUser()
    }

    public async updateUser(): Promise<void> {
        let userRaw: UserRaw = await this._userService.updateUser(this._storeClient.settingsStore.settings)
        // this._storeClient.meStore.setMeRaw(userRaw)
    }
}
