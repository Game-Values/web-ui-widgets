import type { StoreClient } from "#build/clients"
import type { UserRaw, UserUpdateRaw } from "#schema/data-contracts"
import type { UserService } from "~/services"

export class UserController {
    public constructor(
        private _userService: UserService,
        private _storeClient: StoreClient,
    ) {}

    private _mergeUserRaw(payload: UserUpdateRaw): UserUpdateRaw {
        let { user } = this._storeClient.meStore

        return useMerge(user, payload, {
            liked_games: useConcat(
                user.liked_games,
                payload.liked_games,
            ),
        })
    }

    public async fetchUser(): Promise<void> {
        let userRaw: UserRaw = await this._userService.fetchUser()
        this._storeClient.meStore.setUserRaw(userRaw)
    }

    public async updateUser(payload: UserUpdateRaw): Promise<void> {
        let userRaw: UserRaw = await this._userService.updateUser(this._mergeUserRaw(payload))
        // this._storeClient.meStore.setUserRaw(userRaw)
    }
}
