import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { AdapterToken, ClientToken, ServiceToken } from "~/enums"
import { GameService } from "~/services"

interface ServucesTokens {
    [ServiceToken.GAME]: Token<GameService>
}

export class Services extends DIAbstract<ServucesTokens> {
    protected __tokens: ServucesTokens = {
        [ServiceToken.GAME]: token<GameService>(ServiceToken.GAME),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ServiceToken.GAME], GameService],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                GameService,
                this.__getToken(AdapterToken.API),
                this.__getToken(ClientToken.DTO),
            ],
        ]
    }
}
