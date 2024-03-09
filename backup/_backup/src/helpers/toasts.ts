import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { ToastToken } from "~/enums"
import { CreatedLotToast, DeletedLotToast, OrderCancelledToast, OrderCompletedToast, UserRegisteredToast } from "~/toasts"

interface ToastsTokens {
    [ToastToken.CREATED_LOT]: Token<CreatedLotToast>
    [ToastToken.DELETED_LOT]: Token<DeletedLotToast>
    [ToastToken.ORDER_CANCELLED]: Token<OrderCancelledToast>
    [ToastToken.ORDER_COMPLETED]: Token<OrderCompletedToast>
    [ToastToken.USER_REGISTERED]: Token<UserRegisteredToast>
}

export class Toasts extends DIAbstract<ToastsTokens> {
    protected __tokens: ToastsTokens = {
        [ToastToken.CREATED_LOT]: token<CreatedLotToast>(ToastToken.CREATED_LOT),
        [ToastToken.DELETED_LOT]: token<DeletedLotToast>(ToastToken.DELETED_LOT),
        [ToastToken.ORDER_CANCELLED]: token<OrderCancelledToast>(ToastToken.ORDER_CANCELLED),
        [ToastToken.ORDER_COMPLETED]: token<OrderCompletedToast>(ToastToken.ORDER_COMPLETED),
        [ToastToken.USER_REGISTERED]: token<UserRegisteredToast>(ToastToken.USER_REGISTERED),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ToastToken.CREATED_LOT], CreatedLotToast],
            [this.__tokens[ToastToken.DELETED_LOT], DeletedLotToast],
            [this.__tokens[ToastToken.ORDER_CANCELLED], OrderCancelledToast],
            [this.__tokens[ToastToken.ORDER_COMPLETED], OrderCompletedToast],
            [this.__tokens[ToastToken.USER_REGISTERED], UserRegisteredToast],
        ]
    }

    protected get __injections(): Injection[] {
        return [

        ]
    }

    // @Memoize()
    public get createdLotToast(): CreatedLotToast {
        return this.__getInjection(this.__tokens[ToastToken.CREATED_LOT])
    }

    // @Memoize()
    public get deletedLotToast(): DeletedLotToast {
        return this.__getInjection(this.__tokens[ToastToken.DELETED_LOT])
    }

    // @Memoize()
    public get orderCancelledToast(): OrderCancelledToast {
        return this.__getInjection(this.__tokens[ToastToken.ORDER_CANCELLED])
    }

    // @Memoize()
    public get orderCompletedToast(): OrderCompletedToast {
        return this.__getInjection(this.__tokens[ToastToken.ORDER_COMPLETED])
    }

    // @Memoize()
    public get userRegisteredToast(): UserRegisteredToast {
        return this.__getInjection(this.__tokens[ToastToken.USER_REGISTERED])
    }
}
