import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { AdapterToken, ServiceToken } from "~/enums"
import { AuthService, GameService, OrderService, UserService } from "~/services"

interface ServiceTokens {
    [ServiceToken.AUTH]: Token<AuthService>
    [ServiceToken.GAME]: Token<GameService>
    [ServiceToken.ORDER]: Token<OrderService>
    [ServiceToken.USER]: Token<UserService>
}

export class Services extends DIAbstract<ServiceTokens> {
    protected __tokens: ServiceTokens = {
        [ServiceToken.AUTH]: token<AuthService>(ServiceToken.AUTH),
        [ServiceToken.GAME]: token<GameService>(ServiceToken.GAME),
        [ServiceToken.ORDER]: token<OrderService>(ServiceToken.ORDER),
        [ServiceToken.USER]: token<UserService>(ServiceToken.USER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ServiceToken.AUTH], AuthService],
            [this.__tokens[ServiceToken.GAME], GameService],
            [this.__tokens[ServiceToken.ORDER], OrderService],
            [this.__tokens[ServiceToken.USER], UserService],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                AuthService,
                this.__getToken(AdapterToken.API),
            ],
            [
                GameService,
                this.__getToken(AdapterToken.API),
            ],
            [
                OrderService,
                this.__getToken(AdapterToken.API),
            ],
            [
                UserService,
                this.__getToken(AdapterToken.API),
            ],
        ]
    }
}
