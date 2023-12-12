<script lang="ts" setup>
import type { UnwrapRef } from "vue"

interface FormModel {
    // todo
}

let { storeClient } = useClients()

let formModel: UnwrapRef<FormModel> = reactive({
    // todo: store (?)
})
</script>

<template>
<v-form v-model="formModel">
    <v-form-item :label="$t('order.Specify the quantity')">
        <v-form-item pure>
            <v-input :placeholder="$t('order.I will pay')" />
        </v-form-item>

        <ui-icon
            color="secondary"
            heroicons="arrows-right-left"
            size="24"
        />

        <v-form-item pure>
            <v-input :placeholder="$t('order.Other filter')" />
        </v-form-item>
    </v-form-item>

    <v-form-item :label="$t('order.Specify the quantity')">
        <v-input :placeholder="$t('order.Other filter')" />
    </v-form-item>

    <v-form-item :label="$t('order.Order comment')">
        <v-textarea
            :placeholder="$t('order[\'Specify the method of item transfer (e.g., your in-game username)\']')"
        />
    </v-form-item>

    <v-form-item :label="$t('order.Payment method')">
        <v-select :placeholder="$t('order.With a credit card on the website')">
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
        <!-- todo: native submit -->
        <v-form-submit
            block
            @click="storeClient.orderStore.nextOrderStep"
        >
            <i18n-t
                keypath="template.Place an order for"
                scope="global"
            >
                <template #price>
                    $1234
                </template>
            </i18n-t>
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
