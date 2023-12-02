import type { StoreClient } from "#build/clients"
import type { UserRaw } from "#schema/data-contracts"
import type { UserService } from "~/services"

export class UserController {
    public constructor(
        private _userService: UserService,
        private _storeClient: StoreClient,
    ) {}

    public async dislikeGameMe(gameId: string): Promise<void> {
        await this._userService.dislikeGameMe(gameId)
        await this.fetchMe()
    }

    public async fetchMe(): Promise<void> {
        let userRaw: UserRaw = await this._userService.fetchMe()
        this._storeClient.userMeStore.setUserRaw(userRaw)
    }

    public async fetchUser(userId: string): Promise<void> {
        // let userRaw: UserRaw = await this._userService.fetchUser(userId)
        // this._storeClient.userStore.setUserRaw(userRaw)
    }

    public async likeGameMe(gameId: string): Promise<void> {
        await this._userService.likeGameMe(gameId)
        await this.fetchMe()
    }

    public async updateMe(): Promise<void> {
        await this._userService.updateMe(this._storeClient.settingsStore.settings)
        await this.fetchMe()
    }
}
