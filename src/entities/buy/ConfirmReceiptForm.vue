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
                >
                    <i18n-t
                        keypath="order.Confirm Receipt"
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
                    {{ $t(`order["I haven't received the item"]`) }}
                </v-form-reset>
            </v-form-item>
        </v-space>
    </v-form-item>

    <v-form-item>
        <ui-form-description>
            {{ $t(`order["Do not press the button if you haven't checked the receipt of the item, even if the seller has requested it"]`) }}
        </ui-form-description>
    </v-form-item>
</v-form>
</template>
