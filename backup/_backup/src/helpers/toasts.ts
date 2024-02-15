import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ToastToken } from "~/enums"
import { CreatedLotToast, DeletedLotToast, UserRegisteredToast } from "~/toasts"

interface ToastsTokens {
    [ToastToken.CREATED_LOT]: Token<CreatedLotToast>
    [ToastToken.DELETED_LOT]: Token<DeletedLotToast>
    [ToastToken.USER_REGISTERED]: Token<UserRegisteredToast>
}

export class Toasts extends DIAbstract<ToastsTokens> {
    protected __tokens: ToastsTokens = {
        [ToastToken.CREATED_LOT]: token<CreatedLotToast>(ToastToken.CREATED_LOT),
        [ToastToken.DELETED_LOT]: token<DeletedLotToast>(ToastToken.DELETED_LOT),
        [ToastToken.USER_REGISTERED]: token<UserRegisteredToast>(ToastToken.USER_REGISTERED),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ToastToken.CREATED_LOT], CreatedLotToast],
            [this.__tokens[ToastToken.DELETED_LOT], DeletedLotToast],
            [this.__tokens[ToastToken.USER_REGISTERED], UserRegisteredToast],
        ]
    }

    protected get __injections(): Injection[] {
        return [

        ]
    }

    @Memoize()
    public get createdLotToast(): CreatedLotToast {
        return this.__getInjection(this.__tokens[ToastToken.CREATED_LOT])
    }

    @Memoize()
    public get deletedLotToast(): DeletedLotToast {
        return this.__getInjection(this.__tokens[ToastToken.DELETED_LOT])
    }

    @Memoize()
    public get userRegisteredToast(): UserRegisteredToast {
        return this.__getInjection(this.__tokens[ToastToken.USER_REGISTERED])
    }
}
