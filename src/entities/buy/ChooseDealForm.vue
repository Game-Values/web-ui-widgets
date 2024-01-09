<script lang="ts" setup>
import type { Nullable } from "~/types"
import type { UnwrapRef } from "vue"

interface FormModel {
    amount: Nullable<number>
}

let { routerClient, storeClient } = useClients()
let { orderController } = useControllers()

let { item } = storeToRefs(storeClient.itemStore)
let { order } = storeToRefs(storeClient.orderStore)

let formModel: UnwrapRef<FormModel> = reactive({
    amount: null,
})

async function createOrder(): Promise<void> {
    await orderController.createOrder({
        attributes: {
            amount: formModel.amount!,
            currency: getRef(item, "attributes").currency,
            price: formModel.amount! * getRef(item, "attributes").price,
        },
        game_id: routerClient.getRouteParam("gameId"),
        owner_id: getRef(item, "owner_id"),
    })

    await navigateTo(
        routerClient.getRoute(routerClient.routeNames.ORDER, {
            params: {
                orderId: getRef(order, "id"),
            },
        }),
    )
}
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
            :placeholder="$t('order[\'Specify the method of item transfer (e.g., your in-game username)\']')"
        />
    </v-form-item>

    <v-form-item action>
        <!-- todo: native submit -->
        <v-form-submit
            block
            @submit="createOrder()"
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
