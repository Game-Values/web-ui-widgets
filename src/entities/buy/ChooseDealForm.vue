<script lang="ts" setup>
import type { UnwrapRef } from "vue"

interface FormModel {
    // todo
}

let { storeClient } = useClients()
let { orderController } = useControllers()

let { item } = storeToRefs(storeClient.itemStore)

let formModel: UnwrapRef<FormModel> = reactive({
    comment: "",
    count: 0,
    filter1: "",
    filter2: "",
})
</script>

<template>
<v-form :model="formModel">
    <v-form-item :label="$t('order.Specify the quantity')">
        <v-form-item
            prop="count"
            pure
            required
        >
            <v-number-input
                :max="item.attributes.count"
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
            prop="filter1"
            pure
        >
            <v-input :placeholder="$t('order.Other filter')" />
        </v-form-item>
    </v-form-item>

    <v-form-item
        :label="$t('order.Specify the quantity')"
        prop="filter2"
    >
        <v-input :placeholder="$t('order.Other filter')" />
    </v-form-item>

    <v-form-item
        :label="$t('order.Order comment')"
        prop="comment"
    >
        <v-textarea
            :placeholder="$t('order[\'Specify the method of item transfer (e.g., your in-game username)\']')"
        />
    </v-form-item>

    <v-form-item action>
        <!-- todo: native submit -->
        <v-form-submit
            block
            @submit="
                orderController.createOrder({
                    attributes: formModel,
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
