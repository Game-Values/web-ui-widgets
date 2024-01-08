<script lang="ts" setup>
import type { UnwrapRef } from "vue"

interface FormModel {
    paymentType: string
}

useI18n()

let { storeClient } = useClients()
let { orderController } = useControllers()

let { order } = storeToRefs(storeClient.orderStore)

let formModel: UnwrapRef<FormModel> = reactive({
    paymentType: "",
})

async function handlePay(): Promise<void> {
    await orderController.createPayment({
        desc: getRef(order, "attributes").description || `Order #${getRef(order, "id")}`,
        paymentType: formModel.paymentType,
        sum: getRef(order, "attributes").price,
    })
}
</script>

<template>
<v-form
    :model="formModel"
    all-required
>
    <v-form-item
        label="Payment method"
        prop="paymentType"
    >
        <v-select
            :options="[
                'card',
                'webmoney',
                'paypal',
            ]"
            placeholder="Select payment"
        >
            <template #prefix>
                <ui-icon
                    color="positive-light"
                    heroicons="credit-card"
                    size="24"
                />
            </template>
        </v-select>
    </v-form-item>

    <v-form-item>
        <v-space>
            <v-form-item
                action
                pure
            >
                <!-- todo: native submit -->
                <v-form-submit
                    block
                    @submit="handlePay()"
                >
                    <i18n-t
                        keypath="label.Pay"
                        scope="global"
                    />
                </v-form-submit>
            </v-form-item>

            <v-form-item pure>
                <!-- todo: native reset -->
                <v-form-reset
                    block
                >
                    <i18n-t
                        keypath="order.Cancel the order"
                        scope="global"
                    />
                </v-form-reset>
            </v-form-item>
        </v-space>
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
