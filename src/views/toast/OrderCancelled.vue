<template>
<v-space
    align="center"
    size="large"
    vertical
>
    <ui-icon
        color="negative-light"
        custom="order-cancelled"
        height="200"
        width="250"
    />

    <v-title
        :level="3"
        class="text-center"
    >
        Order canceled
    </v-title>

    <v-text class="text-center">
        Your order has been successfully canceled.
    </v-text>

    <v-button type="primary">
        Return to the product page
    </v-button>
</v-space>
</template>
