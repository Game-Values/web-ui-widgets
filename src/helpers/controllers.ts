import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { AuthController, ChatController, FacetController, GameController, ItemController, OrderController, SellController, UserController } from "~/controllers"
import { AdapterToken, ClientToken, ControllerToken } from "~/enums"

interface ControllersTokens {
    [ControllerToken.AUTH]: Token<AuthController>
    [ControllerToken.CHAT]: Token<ChatController>
    [ControllerToken.FACET]: Token<FacetController>
    [ControllerToken.GAME]: Token<GameController>
    [ControllerToken.ITEM]: Token<ItemController>
    [ControllerToken.ORDER]: Token<OrderController>
    [ControllerToken.SELL]: Token<SellController>
    [ControllerToken.USER]: Token<UserController>
}

export class Controllers extends DIAbstract<ControllersTokens> {
    protected __tokens: ControllersTokens = {
        [ControllerToken.AUTH]: token<AuthController>(ControllerToken.AUTH),
        [ControllerToken.CHAT]: token<ChatController>(ControllerToken.CHAT),
        [ControllerToken.FACET]: token<FacetController>(ControllerToken.FACET),
        [ControllerToken.GAME]: token<GameController>(ControllerToken.GAME),
        [ControllerToken.ITEM]: token<ItemController>(ControllerToken.GAME),
        [ControllerToken.ORDER]: token<OrderController>(ControllerToken.ORDER),
        [ControllerToken.SELL]: token<SellController>(ControllerToken.SELL),
        [ControllerToken.USER]: token<UserController>(ControllerToken.USER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ControllerToken.AUTH], AuthController],
            [this.__tokens[ControllerToken.CHAT], ChatController],
            [this.__tokens[ControllerToken.FACET], FacetController],
            [this.__tokens[ControllerToken.GAME], GameController],
            [this.__tokens[ControllerToken.ITEM], ItemController],
            [this.__tokens[ControllerToken.ORDER], OrderController],
            [this.__tokens[ControllerToken.SELL], SellController],
            [this.__tokens[ControllerToken.USER], UserController],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                AuthController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.COOKIE),
            ],
            [
                ChatController,
                this.__getToken(ClientToken.CHAT),
                this.__getToken(ClientToken.STORE),
            ],
            [
                FacetController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.STORE),
            ],
            [
                GameController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.STORE),
            ],
            [
                ItemController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.STORE),
            ],
            [
                OrderController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.STORE),
            ],
            [
                SellController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ClientToken.STORE),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
            ],
            [
                UserController,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.STORE),
            ],
        ]
    }

    @Memoize()
    public get authController(): AuthController {
        return this.__getInjection(this.__tokens[ControllerToken.AUTH])
    }

    @Memoize()
    public get chatController(): ChatController {
        return this.__getInjection(this.__tokens[ControllerToken.CHAT])
    }

    @Memoize()
    public get facetController(): FacetController {
        return this.__getInjection(this.__tokens[ControllerToken.FACET])
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
    public get orderController(): OrderController {
        return this.__getInjection(this.__tokens[ControllerToken.ORDER])
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
