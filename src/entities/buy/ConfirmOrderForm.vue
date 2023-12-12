<script lang="ts" setup>
import type { UnwrapRef } from "vue"

interface FormModel {
    // todo
}

useI18n()

let { storeClient } = useClients()

let formModel: UnwrapRef<FormModel> = reactive({
    // todo: store (?)
})
</script>

<template>
<v-form v-model="formModel">
    <v-form-item>
        <v-space>
            <v-form-item pure>
                <!-- todo: native submit -->
                <v-form-submit
                    block
                    @click="storeClient.orderStore.nextOrderStep"
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
                    @click="storeClient.orderStore.prevOrderStep"
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
