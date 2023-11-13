import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { GameController } from "~/controllers"
import { ClientToken, ControllerToken, ServiceToken } from "~/enums"

interface ControllersTokens {
    [ControllerToken.GAME]: Token<GameController>
}

export class Controllers extends DIAbstract<ControllersTokens> {
    protected __tokens: ControllersTokens = {
        [ControllerToken.GAME]: token<GameController>(ControllerToken.GAME),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ControllerToken.GAME], GameController],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                GameController,
                this.__getToken(ServiceToken.GAME),
                this.__getToken(ClientToken.STORE),
            ],
        ]
    }

    @Memoize()
    public get gameController(): GameController {
        return this.__getInjection(this.__tokens[ControllerToken.GAME])
    }
}
