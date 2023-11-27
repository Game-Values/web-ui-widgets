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
            notification="Purchases and sales"
            :model-value="true"
        />

        <settings-notification-switch
            notification="Chat Messages"
            :model-value="true"
        />

        <settings-notification-switch
            notification="Mailing GameValues"
            :model-value="true"
        />
    </v-space>
</v-space>
</template>
