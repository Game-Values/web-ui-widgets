<script lang="ts" setup>
useI18n()
</script>

<template>
<v-row class="w-full">
    <v-column>
        <v-space vertical>
            <v-title :level="3">
                <i18n-t
                    keypath="order.Your order has been successfully placed and paid for"
                    scope="global"
                />
            </v-title>

            <v-text>
                <i18n-t
                    keypath="order['Please check the receipt of the item from the seller and confirm the transaction. If you have not received the item, please contact our technical support. Our moderator will join the chat and resolve the dispute']"
                    scope="global"
                />
            </v-text>
        </v-space>
    </v-column>
</v-row>
</template>
