<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Information for Sellers",
    },
})
</script>

<template>
<v-collapse>
    <v-collapse-panel title="How do I list an item for sale?">
        <v-text disabled>
            Log in to your account and go to the "Sales" section. Select the necessary parameters, add
            a description and photos of the item. Set the price and click the "Sell" button.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="How can I track my sales?">
        <v-text disabled>
            In your account, there is a "My Sales" section where you can monitor the status of your
            items, view offers, and manage orders.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
