import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ControllerToken, FacadeToken } from "~/enums"
import { GameFacade, MainFacade, OrderFacade } from "~/facades"

interface FacadesTokens {
    [FacadeToken.GAME]: Token<GameFacade>
    [FacadeToken.MAIN]: Token<MainFacade>
    [FacadeToken.ORDER]: Token<OrderFacade>
}

export class Facades extends DIAbstract<FacadesTokens> {
    protected __tokens: FacadesTokens = {
        [FacadeToken.GAME]: token<GameFacade>(FacadeToken.GAME),
        [FacadeToken.MAIN]: token<MainFacade>(FacadeToken.MAIN),
        [FacadeToken.ORDER]: token<OrderFacade>(FacadeToken.ORDER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[FacadeToken.MAIN], MainFacade],
            [this.__tokens[FacadeToken.GAME], GameFacade],
            [this.__tokens[FacadeToken.ORDER], OrderFacade],
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
            [
                OrderFacade,
                this.__getToken(ControllerToken.ORDER),
            ],
        ]
    }

    @Memoize()
    public get gameFacade(): GameFacade {
        return this.__getInjection(this.__tokens[FacadeToken.GAME])
    }

    @Memoize()
    public get mainFacade(): MainFacade {
        return this.__getInjection(this.__tokens[FacadeToken.MAIN])
    }

    @Memoize()
    public get orderFacade(): OrderFacade {
        return this.__getInjection(this.__tokens[FacadeToken.GAME])
    }
}
