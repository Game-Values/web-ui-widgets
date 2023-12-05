import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ClientToken, ControllerToken, FacadeToken } from "~/enums"
import { GameFacade, MainFacade, BuyFacade, SaleFacade, UserFacade } from "~/facades"

interface FacadesTokens {
    [FacadeToken.BUY]: Token<BuyFacade>
    [FacadeToken.GAME]: Token<GameFacade>
    [FacadeToken.MAIN]: Token<MainFacade>
    [FacadeToken.SALE]: Token<SaleFacade>
    [FacadeToken.USER]: Token<UserFacade>
}

export class Facades extends DIAbstract<FacadesTokens> {
    protected __tokens: FacadesTokens = {
        [FacadeToken.BUY]: token<BuyFacade>(FacadeToken.BUY),
        [FacadeToken.GAME]: token<GameFacade>(FacadeToken.GAME),
        [FacadeToken.MAIN]: token<MainFacade>(FacadeToken.MAIN),
        [FacadeToken.SALE]: token<SaleFacade>(FacadeToken.SALE),
        [FacadeToken.USER]: token<UserFacade>(FacadeToken.USER),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[FacadeToken.BUY], BuyFacade],
            [this.__tokens[FacadeToken.MAIN], MainFacade],
            [this.__tokens[FacadeToken.GAME], GameFacade],
            [this.__tokens[FacadeToken.SALE], SaleFacade],
            [this.__tokens[FacadeToken.USER], UserFacade],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                BuyFacade,
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
            ],
            [
                MainFacade,
                this.__getToken(ControllerToken.GAME),
            ],
            [
                GameFacade,
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
            ],
            [
                SaleFacade,
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.SALE),
            ],
            [
                UserFacade,
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ControllerToken.USER),
            ],
        ]
    }

    @Memoize()
    public get buyFacade(): BuyFacade {
        return this.__getInjection(this.__tokens[FacadeToken.BUY])
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
    public get saleFacade(): SaleFacade {
        return this.__getInjection(this.__tokens[FacadeToken.SALE])
    }

    @Memoize()
    public get userFacade(): UserFacade {
        return this.__getInjection(this.__tokens[FacadeToken.USER])
    }
}
