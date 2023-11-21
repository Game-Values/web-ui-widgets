import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { AdapterToken, ServiceToken } from "~/enums"
import { GameService, OrderService } from "~/services"

interface ServiceTokens {
    [ServiceToken.GAME]: Token<GameService>
    [ServiceToken.ORDER]: Token<OrderService>
}

export class Services extends DIAbstract<ServiceTokens> {
    protected __tokens: ServiceTokens = {
        [ServiceToken.GAME]: token<GameService>(ServiceToken.GAME),
        [ServiceToken.ORDER]: token<OrderService>(ServiceToken.ORDER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ServiceToken.GAME], GameService],
            [this.__tokens[ServiceToken.ORDER], OrderService],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                GameService,
                this.__getToken(AdapterToken.API),
            ],
            [
                OrderService,
                this.__getToken(AdapterToken.API),
            ],
        ]
    }
}
