import type { UserRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"
import type { StoreClient } from "~/clients"
import type { User } from "~/dto"

export class UserController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _storeClient: StoreClient,
    ) {}

    public async dislikeGameMe(gameId: string): Promise<void> {
        await this._apiAdapter.dislikeGameEndpointApiV1UsersDislikeGamePost(gameId)
        await this.fetchMe()
    }

    public async fetchMe(): Promise<User> {
        let userRaw: UserRaw = await this._apiAdapter.readUserApiV1UsersGet()
        this._storeClient.userMeStore.setUserRaw(userRaw)

        return this._storeClient.userMeStore.user
    }

    public async fetchUser(userId: string): Promise<User> {
        let userRaw: UserRaw = await this._apiAdapter.readUserApiV1UsersUsersUserIdGet(userId)
        this._storeClient.userStore.setUserRaw(userRaw)

        return this._storeClient.userStore.user
    }

    public async likeGameMe(gameId: string): Promise<void> {
        await this._apiAdapter.likeGameEndpointApiV1UsersLikeGamePost(gameId)
        await this.fetchMe()
    }

    public async updateMe(): Promise<void> {
        await this._apiAdapter.updateUserApiV1UsersPut(this._storeClient.settingsStore.settings)
        await this.fetchMe()
    }
}
