import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ApiAdapter, HttpAdapter } from "~/adapters"
import { AdapterToken, ClientToken } from "~/enums"

interface AdaptersTokens {
    [AdapterToken.API]: Token<ApiAdapter>
    [AdapterToken.HTTP]: Token<HttpAdapter>
}

export class Adapters extends DIAbstract<AdaptersTokens> {
    protected __tokens: AdaptersTokens = {
        [AdapterToken.API]: token<ApiAdapter>(AdapterToken.API),
        [AdapterToken.HTTP]: token<HttpAdapter>(AdapterToken.HTTP),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[AdapterToken.API], ApiAdapter],
            [this.__tokens[AdapterToken.HTTP], HttpAdapter],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                ApiAdapter,
                this.__getToken(ClientToken.HTTP),
            ],
            [
                HttpAdapter,
                this.__getToken(ClientToken.COOKIE),
            ],
        ]
    }
}
