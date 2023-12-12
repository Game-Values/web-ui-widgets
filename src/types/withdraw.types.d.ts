import type { PaymentType } from "~/enums"
import type { Nullable } from "~/types"

export interface WithdrawRaw {
    amount: number
    type: Nullable<PaymentType>
}
