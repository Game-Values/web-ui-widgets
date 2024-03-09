import type { Binding, Injection } from "~/types"
import type { Token } from "brandi"

import { token } from "brandi"

import { DIAbstract } from "~/abstract"
import { DeletedLotConfirm } from "~/confirms"
import { ConfirmToken } from "~/enums"

interface ConfirmsTokens {
    [ConfirmToken.DELETED_LOT]: Token<DeletedLotConfirm>
}

export class Confirms extends DIAbstract<ConfirmsTokens> {
    protected __tokens: ConfirmsTokens = {
        [ConfirmToken.DELETED_LOT]: token<DeletedLotConfirm>(ConfirmToken.DELETED_LOT),
    }

    protected get __bindings(): Binding[] {
        return [
            [this.__tokens[ConfirmToken.DELETED_LOT], DeletedLotConfirm],
        ]
    }

    protected get __injections(): Injection[] {
        return [

        ]
    }

    // @Memoize()
    public get deletedLotConfirm(): DeletedLotConfirm {
        return this.__getInjection(this.__tokens[ConfirmToken.DELETED_LOT])
    }
}
