import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { GameController, OrderController } from "~/controllers"
import { ClientToken, ControllerToken, ServiceToken } from "~/enums"

interface ControllersTokens {
    [ControllerToken.GAME]: Token<GameController>
    [ControllerToken.ORDER]: Token<OrderController>
}

export class Controllers extends DIAbstract<ControllersTokens> {
    protected __tokens: ControllersTokens = {
        [ControllerToken.GAME]: token<GameController>(ControllerToken.GAME),
        [ControllerToken.ORDER]: token<OrderController>(ControllerToken.ORDER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ControllerToken.GAME], GameController],
            [this.__tokens[ControllerToken.ORDER], OrderController],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                GameController,
                this.__getToken(ServiceToken.GAME),
                this.__getToken(ClientToken.STORE),
            ],
            [
                OrderController,
                this.__getToken(ServiceToken.ORDER),
                this.__getToken(ClientToken.STORE),
            ],
        ]
    }

    @Memoize()
    public get gameController(): GameController {
        return this.__getInjection(this.__tokens[ControllerToken.GAME])
    }
}
