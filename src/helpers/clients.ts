import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { DTOClient, HttpClient } from "~/clients"
import { ClientToken } from "~/enums"

interface ClientsTokens {
    [ClientToken.DTO]: Token<DTOClient>
    [ClientToken.HTTP]: Token<HttpClient>
}

export class Clients extends DIAbstract<ClientsTokens> {
    protected __tokens: ClientsTokens = {
        [ClientToken.DTO]: token<DTOClient>(ClientToken.DTO),
        [ClientToken.HTTP]: token<HttpClient>(ClientToken.HTTP),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ClientToken.DTO], DTOClient],
            [this.__tokens[ClientToken.HTTP], HttpClient],
        ]
    }

    protected get __injections(): Injection[] {
        return [

        ]
    }
}
