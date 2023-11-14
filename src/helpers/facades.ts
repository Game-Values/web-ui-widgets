import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ControllerToken, FacadeToken } from "~/enums"
import { MainFacade } from "~/facades"

interface FacadesTokens {
    [FacadeToken.MAIN]: Token<MainFacade>
}

export class Facades extends DIAbstract<FacadesTokens> {
    protected __tokens: FacadesTokens = {
        [FacadeToken.MAIN]: token<MainFacade>(FacadeToken.MAIN),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[FacadeToken.MAIN], MainFacade],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                MainFacade,
                this.__getToken(ControllerToken.GAME),
            ],
        ]
    }

    @Memoize()
    public get mainFacade(): MainFacade {
        return this.__getInjection(this.__tokens[FacadeToken.MAIN])
    }
}
