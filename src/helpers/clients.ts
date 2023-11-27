import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { CookieClient, HttpClient, StoreClient } from "~/clients"
import { AdapterToken, ClientToken } from "~/enums"

interface ClientsTokens {
    [ClientToken.COOKIE]: Token<CookieClient>
    [ClientToken.HTTP]: Token<HttpClient>
    [ClientToken.STORE]: Token<StoreClient>
}

export class Clients extends DIAbstract<ClientsTokens> {
    protected __tokens: ClientsTokens = {
        [ClientToken.COOKIE]: token<CookieClient>(ClientToken.COOKIE),
        [ClientToken.HTTP]: token<HttpClient>(ClientToken.HTTP),
        [ClientToken.STORE]: token<StoreClient>(ClientToken.STORE),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ClientToken.COOKIE], CookieClient],
            [this.__tokens[ClientToken.HTTP], HttpClient],
            [this.__tokens[ClientToken.STORE], StoreClient],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                HttpClient,
                this.__getToken(AdapterToken.HTTP),
            ],
        ]
    }

    @Memoize()
    public get cookieClient(): CookieClient {
        return this.__getInjection(this.__tokens[ClientToken.COOKIE])
    }

    @Memoize()
    public get httpClient(): HttpClient {
        return this.__getInjection(this.__tokens[ClientToken.HTTP])
    }

    @Memoize()
    public get storeClient(): StoreClient {
        return this.__getInjection(this.__tokens[ClientToken.STORE])
    }
}
