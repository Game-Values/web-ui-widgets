import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ApiAdapter } from "~/adapters"
import { AdapterToken, ClientToken } from "~/enums"

interface AdaptersTokens {
    [AdapterToken.API]: Token<ApiAdapter>
}

export class Adapters extends DIAbstract<AdaptersTokens> {
    protected __tokens: AdaptersTokens = {
        [AdapterToken.API]: token<ApiAdapter>(AdapterToken.API),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[AdapterToken.API], ApiAdapter],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                ApiAdapter,
                this.__getToken(ClientToken.HTTP),
            ],
        ]
    }
}
