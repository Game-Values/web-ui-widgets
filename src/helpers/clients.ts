import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { HttpClient, StoreClient } from "~/clients"
import { ClientToken } from "~/enums"

interface ClientsTokens {
    [ClientToken.HTTP]: Token<HttpClient>
    [ClientToken.STORE]: Token<StoreClient>
}

export class Clients extends DIAbstract<ClientsTokens> {
    protected __tokens: ClientsTokens = {
        [ClientToken.HTTP]: token<HttpClient>(ClientToken.HTTP),
        [ClientToken.STORE]: token<StoreClient>(ClientToken.STORE),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ClientToken.HTTP], HttpClient],
            [this.__tokens[ClientToken.STORE], StoreClient],
        ]
    }

    protected get __injections(): Injection[] {
        return [

        ]
    }

    @Memoize()
    public get storeClient(): StoreClient {
        return this.__getInjection(this.__tokens[ClientToken.STORE])
    }
}
