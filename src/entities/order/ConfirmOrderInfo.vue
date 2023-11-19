<script lang="ts" setup>
useI18n()
</script>

<template>
<v-row class="w-full">
    <v-column>
        <v-space vertical>
            <v-title :level="3">
                <i18n-t
                    keypath="template.Your order for"
                    scope="global"
                >
                    <template #price>
                        $1234
                    </template>
                </i18n-t>
            </v-title>

            <v-text>
                <i18n-t
                    keypath="order.Check order details before payment"
                    scope="global"
                />
            </v-text>
        </v-space>
    </v-column>

    <v-column
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="order.Payment method"
                    scope="global"
                />
            </v-title>

            <v-space>
                <ui-icon
                    color="positive-light"
                    heroicons="credit-card"
                    size="24"
                />

                <v-text>
                    By credit card on the website
                </v-text>
            </v-space>
        </v-space>
    </v-column>

    <v-column
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="order.Order comment"
                    scope="global"
                />
            </v-title>

            <v-text>
                <i18n-t
                    keypath="template.Transfer the item to the username"
                    scope="global"
                >
                    <template #username>
                        Anonymous
                    </template>
                </i18n-t>
            </v-text>
        </v-space>
    </v-column>
</v-row>
</template>
