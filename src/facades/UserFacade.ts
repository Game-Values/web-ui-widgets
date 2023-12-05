import type { FacadeAbstract } from "~/abstract"
import type { RouterClient } from "~/clients"
import type { UserController } from "~/controllers"

export class UserFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _userController: UserController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._userController.fetchUser(this._routerClient.getRouteParam("userId")),
        ])
    }
}
