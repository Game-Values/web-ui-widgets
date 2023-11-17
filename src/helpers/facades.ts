import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ControllerToken, FacadeToken } from "~/enums"
import { MainFacade, GameFacade } from "~/facades"

interface FacadesTokens {
    [FacadeToken.MAIN]: Token<MainFacade>
    [FacadeToken.GAME]: Token<GameFacade>
}

export class Facades extends DIAbstract<FacadesTokens> {
    protected __tokens: FacadesTokens = {
        [FacadeToken.MAIN]: token<MainFacade>(FacadeToken.MAIN),
        [FacadeToken.GAME]: token<GameFacade>(FacadeToken.GAME),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[FacadeToken.MAIN], MainFacade],
            [this.__tokens[FacadeToken.GAME], GameFacade],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                MainFacade,
                this.__getToken(ControllerToken.GAME),
            ],
            [
                GameFacade,
                this.__getToken(ControllerToken.GAME),
            ],
        ]
    }

    @Memoize()
    public get mainFacade(): MainFacade {
        return this.__getInjection(this.__tokens[FacadeToken.MAIN])
    }

    @Memoize()
    public get gameFacade(): GameFacade {
        return this.__getInjection(this.__tokens[FacadeToken.GAME])
    }
}
