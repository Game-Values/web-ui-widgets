import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { AuthController, GameController, ItemController, SellController, UserController } from "~/controllers"
import { ClientToken, ControllerToken, ServiceToken } from "~/enums"

interface ControllersTokens {
    [ControllerToken.AUTH]: Token<AuthController>
    [ControllerToken.GAME]: Token<GameController>
    [ControllerToken.ITEM]: Token<ItemController>
    [ControllerToken.SELL]: Token<SellController>
    [ControllerToken.USER]: Token<UserController>
}

export class Controllers extends DIAbstract<ControllersTokens> {
    protected __tokens: ControllersTokens = {
        [ControllerToken.AUTH]: token<AuthController>(ControllerToken.AUTH),
        [ControllerToken.GAME]: token<GameController>(ControllerToken.GAME),
        [ControllerToken.ITEM]: token<ItemController>(ControllerToken.GAME),
        [ControllerToken.SELL]: token<SellController>(ControllerToken.SELL),
        [ControllerToken.USER]: token<UserController>(ControllerToken.USER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ControllerToken.AUTH], AuthController],
            [this.__tokens[ControllerToken.GAME], GameController],
            [this.__tokens[ControllerToken.ITEM], ItemController],
            [this.__tokens[ControllerToken.SELL], SellController],
            [this.__tokens[ControllerToken.USER], UserController],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                AuthController,
                this.__getToken(ServiceToken.AUTH),
                this.__getToken(ClientToken.COOKIE),
            ],
            [
                GameController,
                this.__getToken(ServiceToken.GAME),
                this.__getToken(ClientToken.STORE),
            ],
            [
                ItemController,
                this.__getToken(ServiceToken.ITEM),
                this.__getToken(ClientToken.STORE),
            ],
            [
                SellController,
                this.__getToken(ServiceToken.ITEM),
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ClientToken.STORE),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
            ],
            [
                UserController,
                this.__getToken(ServiceToken.USER),
                this.__getToken(ClientToken.STORE),
            ],
        ]
    }

    @Memoize()
    public get authController(): AuthController {
        return this.__getInjection(this.__tokens[ControllerToken.AUTH])
    }

    @Memoize()
    public get gameController(): GameController {
        return this.__getInjection(this.__tokens[ControllerToken.GAME])
    }

    @Memoize()
    public get itemController(): ItemController {
        return this.__getInjection(this.__tokens[ControllerToken.ITEM])
    }

    @Memoize()
    public get sellController(): SellController {
        return this.__getInjection(this.__tokens[ControllerToken.SELL])
    }

    @Memoize()
    public get userController(): UserController {
        return this.__getInjection(this.__tokens[ControllerToken.USER])
    }
}
