<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Delivery and Receipt",
    },
})
</script>

<template>
<v-collapse>
    <v-collapse-panel title="How is delivery carried out?">
        <v-text disabled>
            For digital goods, a link or activation key will be sent to your email immediately after
            payment. For physical goods, delivery information will be provided by the seller after the
            purchase is made.
        </v-text>
    </v-collapse-panel>

    <v-collapse-panel title="How long does delivery take?">
        <v-text disabled>
            Delivery time depends on the type of item and its location. The seller will provide estimated
            delivery times.
        </v-text>
    </v-collapse-panel>
</v-collapse>
</template>
