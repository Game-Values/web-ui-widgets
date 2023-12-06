<script lang="ts" setup>
definePageMeta({
    seo: {
        title: "Notifications",
    },
})
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-title :level="3">
        Notifications
    </v-title>

    <v-text disabled>
        Select which Notifications will be sent to your email account
    </v-text>

    <v-space
        class="max-w-40rem"
        vertical
    >
        <settings-notification-switch
            :model-value="true"
            notification="Purchases and sales"
        />

        <settings-notification-switch
            :model-value="true"
            notification="Chat Messages"
        />

        <settings-notification-switch
            :model-value="true"
            notification="Mailing GameValues"
        />
    </v-space>
</v-space>
</template>
