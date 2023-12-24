import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ClientToken, ControllerToken, FacadeToken } from "~/enums"
import { BuyFacade, FavoritesFacade, GameFacade, MainFacade, SellFacade, UserFacade, UserMeFacade } from "~/facades"

interface FacadesTokens {
    [FacadeToken.BUY]: Token<BuyFacade>
    [FacadeToken.FAVORITES]: Token<FavoritesFacade>
    [FacadeToken.GAME]: Token<GameFacade>
    [FacadeToken.MAIN]: Token<MainFacade>
    [FacadeToken.SELL]: Token<SellFacade>
    [FacadeToken.USER]: Token<UserFacade>
    [FacadeToken.USER_ME]: Token<UserMeFacade>
}

export class Facades extends DIAbstract<FacadesTokens> {
    protected __tokens: FacadesTokens = {
        [FacadeToken.BUY]: token<BuyFacade>(FacadeToken.BUY),
        [FacadeToken.FAVORITES]: token<FavoritesFacade>(FacadeToken.FAVORITES),
        [FacadeToken.GAME]: token<GameFacade>(FacadeToken.GAME),
        [FacadeToken.MAIN]: token<MainFacade>(FacadeToken.MAIN),
        [FacadeToken.SELL]: token<SellFacade>(FacadeToken.SELL),
        [FacadeToken.USER]: token<UserFacade>(FacadeToken.USER),
        [FacadeToken.USER_ME]: token<UserMeFacade>(FacadeToken.USER_ME),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[FacadeToken.BUY], BuyFacade],
            [this.__tokens[FacadeToken.FAVORITES], FavoritesFacade],
            [this.__tokens[FacadeToken.MAIN], MainFacade],
            [this.__tokens[FacadeToken.GAME], GameFacade],
            [this.__tokens[FacadeToken.SELL], SellFacade],
            [this.__tokens[FacadeToken.USER], UserFacade],
            [this.__tokens[FacadeToken.USER_ME], UserMeFacade],
        ]
    }

    protected get __injections(): Injection[] {
        return [
            [
                BuyFacade,
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ClientToken.STORE),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
            ],
            [
                FavoritesFacade,
                this.__getToken(ControllerToken.GAME),
            ],
            [
                MainFacade,
                this.__getToken(ControllerToken.CHAT),
                this.__getToken(ControllerToken.GAME),
            ],
            [
                GameFacade,
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ClientToken.STORE),
                this.__getToken(ControllerToken.FACET),
                this.__getToken(ControllerToken.GAME),
            ],
            [
                SellFacade,
                this.__getToken(ClientToken.STORE),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.SELL),
            ],
            [
                UserFacade,
                this.__getToken(ClientToken.ROUTER),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
                this.__getToken(ControllerToken.USER),
            ],
            [
                UserMeFacade,
                this.__getToken(ClientToken.STORE),
                this.__getToken(ControllerToken.GAME),
                this.__getToken(ControllerToken.ITEM),
                this.__getToken(ControllerToken.USER),
            ],
        ]
    }

    @Memoize()
    public get buyFacade(): BuyFacade {
        return this.__getInjection(this.__tokens[FacadeToken.BUY])
    }

    @Memoize()
    public get favoritesFacade(): FavoritesFacade {
        return this.__getInjection(this.__tokens[FacadeToken.FAVORITES])
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
    public get sellFacade(): SellFacade {
        return this.__getInjection(this.__tokens[FacadeToken.SELL])
    }

    @Memoize()
    public get userFacade(): UserFacade {
        return this.__getInjection(this.__tokens[FacadeToken.USER])
    }

    @Memoize()
    public get userMeFacade(): UserMeFacade {
        return this.__getInjection(this.__tokens[FacadeToken.USER_ME])
    }
}
