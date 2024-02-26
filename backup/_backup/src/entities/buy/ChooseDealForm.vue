<script lang="ts" setup>
import type { Nullable } from "~/types"
import type { UnwrapRef } from "vue"

import { OrderCurrencyRaw } from "#schema/data-contracts"

interface FormModel {
    amount: Nullable<number>
    currency: OrderCurrencyRaw,
}

let { storeClient } = useClients()
let { orderController } = useControllers()

let { item } = storeToRefs(storeClient.itemStore)

let formModel: UnwrapRef<FormModel> = reactive({ ...getRef(item, "attributes") })
</script>

<template>
<v-form :model="formModel">
    <v-form-item :label="$t('order.Specify the quantity')">
        <v-form-item
            prop="amount"
            pure
            required
        >
            <v-number-input
                :max="item.attributes.amount"
                :min="1"
                :placeholder="$t('order.I will pay')"
            />
        </v-form-item>

        <ui-icon
            color="secondary"
            heroicons="arrows-right-left"
            size="24"
        />

        <v-form-item
            prop="amount"
            pure
        >
            <v-number-input
                :max="item.attributes.amount"
                :min="1"
                placeholder="I will receive"
            />
        </v-form-item>
    </v-form-item>

    <v-form-item
        :label="$t('order.Specify the quantity')"
    >
        <v-input :placeholder="$t('order.Other filter')" />
    </v-form-item>

    <v-form-item
        :label="$t('order.Order comment')"
    >
        <v-textarea
            :placeholder="$t('order[\'Specify the method of header transfer (e.o., your in-lot username)\']')"
        />
    </v-form-item>

    <v-form-item action>
        <!-- todo: native submit -->
        <v-form-submit
            block
            @submit="
                orderController.createOrder({
                    attributes: {
                        amount: formModel.amount!,
                        currency: formModel.currency,
                        price: formModel.amount! * item.attributes.price,
                    },
                    game_id: item.id,
                    owner_id: item.owner_id,
                })
            "
        >
            Create order
        </v-form-submit>
    </v-form-item>

    <v-form-item>
        <v-text disabled>
            <i18n-t
                keypath="order.The seller will not receive payment until you confirm that they have fulfilled all obligations"
                scope="global"
            />
        </v-text>
    </v-form-item>
</v-form>
</template>
