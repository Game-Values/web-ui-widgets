<script lang="ts" setup>
let { storeClient } = useClients()
let { userController } = useControllers()
</script>

<template>
<v-form
    :model="storeClient.settingsStore.settingsRaw"
    class="max-w-40rem"
>
    <v-form-item>
        <user-profile-avatar premium />
    </v-form-item>

    <v-form-item label="Nickname">
        <v-input
            :value="storeClient.userMeStore.user.full_name"
            disabled
        />
    </v-form-item>

    <v-form-item
        label="Email"
        prop="email"
    >
        <v-input />
    </v-form-item>

    <v-form-item label="Country">
        <v-input disabled />
    </v-form-item>

    <v-form-item label="Currency">
        <v-input disabled />
    </v-form-item>

    <v-form-item>
        <v-space
            align="center"
            size="large"
        >
            <v-switch disabled />

            <v-text disabled>
                Show the amount of my transactions to other users
            </v-text>
        </v-space>
    </v-form-item>

    <v-form-item>
        <v-form-submit
            block
            @submit="userController.updateMe()"
        >
            Save
        </v-form-submit>
    </v-form-item>
</v-form>
</template>
