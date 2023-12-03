import type { FacadeAbstract } from "~/abstract"
import type { RouterClient, StoreClient } from "~/clients"
import type { UserController } from "~/controllers"

export class UserFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _userController: UserController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.userStore.$dispose()

        await this._userController.fetchUser(this._routerClient.getRouteParam("userId"))
    }
}
