<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Subscription",
    },
})
</script>

<template>
<v-row>
    <v-column :span="8">
        <ui-image
            height="480"
            src="/images/development-free-subscription.png"
        />
    </v-column>

    <v-column :span="8">
        <ui-image
            height="480"
            src="/images/development-premium-subscription.png"
        />
    </v-column>

    <v-column :span="8">
        <ui-image
            height="480"
            src="/images/development-vip-subscription.png"
        />
    </v-column>
</v-row>
</template>
