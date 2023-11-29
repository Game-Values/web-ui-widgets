import type { StoreClient } from "#build/clients"
import type { UserRaw } from "#schema/data-contracts"
import type { UserService } from "~/services"

export class UserController {
    public constructor(
        private _userService: UserService,
        private _storeClient: StoreClient,
    ) {}

    public async fetchUser(): Promise<void> {
        let userRaw: UserRaw = await this._userService.fetchUser()
        this._storeClient.meStore.setUserRaw(userRaw)
    }
}
