<script setup lang="ts">
let { storeClient } = useClients()
</script>

<template>
<v-form
    :model="storeClient.withdrawStore.withdrawRaw"
    all-required
>
    <v-form-item label="Amount Withdrawal">
        <v-space size="large">
            <v-form-item
                prop="amount"
                pure
            >
                <v-number-input>
                    <template #suffix>
                        $
                    </template>
                </v-number-input>
            </v-form-item>

            <v-space
                align="center"
                size="small"
            >
                <ui-icon
                    color="white-6"
                    heroicons="information-circle"
                    size="24"
                />

                <v-text disabled>
                    Available {{ formatPrice(100) }}
                </v-text>
            </v-space>
        </v-space>
    </v-form-item>

    <v-form-item label="Method of money withdrawal">
        <v-select placeholder="Select Withdrawal method" />
    </v-form-item>

    <v-form-item action>
        <v-form-submit block>
            Withdraw
        </v-form-submit>
    </v-form-item>
</v-form>
</template>
