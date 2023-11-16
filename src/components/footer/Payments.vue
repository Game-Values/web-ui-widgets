<script lang="ts" setup>
import { PaymentType } from "~/enums"

interface Payment {
    icon: string
    size: [
        width: number,
        height: number,
    ]
}

let payments: Record<PaymentType, Payment> = {
    [PaymentType.VISA]: {
        icon: PaymentType.VISA,
        size: [
            77,
            28,
        ],
    },
    [PaymentType.MASTER_CARD]: {
        icon: PaymentType.MASTER_CARD,
        size: [
            48,
            36,
        ],
    },
    [PaymentType.COIN]: {
        icon: PaymentType.COIN,
        size: [
            39,
            36,
        ],
    },
    [PaymentType.PAY_PAL]: {
        icon: PaymentType.PAY_PAL,
        size: [
            30,
            30,
        ],
    },
    [PaymentType.WEB_MONEY]: {
        icon: PaymentType.WEB_MONEY,
        size: [
            121,
            42,
        ],
    },
}
</script>

<template>
<ui-layout-space
    align="center"
    size="large"
>
    <template
        v-for="(payment, paymentType) in payments"
        :key="paymentType"
    >
        <ui-base-icon
            :custom="useKebabCase(useToLower(payment.icon))"
            :width="useFirst(payment.size)"
            :height="useLast(payment.size)"
        />
    </template>
</ui-layout-space>
</template>
