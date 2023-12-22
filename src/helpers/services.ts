import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { AdapterToken, ClientToken, ServiceToken } from "~/enums"
import { AuthService, ChatService, FacetService, GameService, ItemService, OrderService, UserService } from "~/services"

interface ServiceTokens {
    [ServiceToken.AUTH]: Token<AuthService>
    [ServiceToken.CHAT]: Token<ChatService>
    [ServiceToken.FACET]: Token<FacetService>
    [ServiceToken.GAME]: Token<GameService>
    [ServiceToken.ITEM]: Token<ItemService>
    [ServiceToken.ORDER]: Token<OrderService>
    [ServiceToken.USER]: Token<UserService>
}

export class Services extends DIAbstract<ServiceTokens> {
    protected __tokens: ServiceTokens = {
        [ServiceToken.AUTH]: token<AuthService>(ServiceToken.AUTH),
        [ServiceToken.CHAT]: token<ChatService>(ServiceToken.CHAT),
        [ServiceToken.FACET]: token<FacetService>(ServiceToken.FACET),
        [ServiceToken.GAME]: token<GameService>(ServiceToken.GAME),
        [ServiceToken.ITEM]: token<ItemService>(ServiceToken.ITEM),
        [ServiceToken.ORDER]: token<OrderService>(ServiceToken.ORDER),
        [ServiceToken.USER]: token<UserService>(ServiceToken.USER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ServiceToken.AUTH], AuthService],
            [this.__tokens[ServiceToken.CHAT], ChatService],
            [this.__tokens[ServiceToken.FACET], FacetService],
            [this.__tokens[ServiceToken.GAME], GameService],
            [this.__tokens[ServiceToken.ITEM], ItemService],
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
                ChatService,
                // todo: ChatAdapter or ChatClient (?)
                this.__getToken(ClientToken.CHAT),
                this.__getToken(ClientToken.STORE),
            ],
            [
                FacetService,
                this.__getToken(AdapterToken.API),
            ],
            [
                GameService,
                this.__getToken(AdapterToken.API),
            ],
            [
                ItemService,
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
