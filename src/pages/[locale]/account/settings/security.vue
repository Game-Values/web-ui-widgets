<script lang="ts" setup>
// todo: mv to components / entities

definePageMeta({
    seo: {
        title: "Security",
    },
})

let { storeClient } = useClients()
let { userController } = useControllers()
</script>

<template>
<v-row>
    <v-column :span="12">
        <v-space
            size="large"
            vertical
        >
            <v-title :level="3">
                Change password
            </v-title>

            <v-form
                :model="storeClient.settingsStore.settingsRaw"
                class="max-w-40rem"
            >
                <v-form-item
                    label="Old password"
                    prop="oldPassword"
                >
                    <v-input
                        placeholder="Password"
                        type="password"
                        plain-password
                    />
                </v-form-item>

                <v-form-item
                    label="New Password"
                    prop="password"
                >
                    <v-input
                        placeholder="Password"
                        type="password"
                        plain-password
                    />
                </v-form-item>

                <v-form-item
                    label="New Password again"
                    props="repeatPassword"
                >
                    <v-input
                        placeholder="Password"
                        type="password"
                        plain-password
                    />
                </v-form-item>

                <v-form-item action>
                    <v-form-submit
                        block
                        @submit="userController.updateMe()"
                    >
                        Save
                    </v-form-submit>
                </v-form-item>
            </v-form>
        </v-space>
    </v-column>

    <v-column :span="12">
        <v-card
            :content-style="`
                padding: ${useTheme('spacing.10')};
            `"
            class="
                bg-white-02
            "
        >
            <v-form>
                <v-form-item>
                    <v-title :level="3">
                        Two-factor authentication
                    </v-title>
                </v-form-item>

                <v-form-item>
                    <v-text disabled>
                        Bind your phone number and any changes to personal data
                        will be available via a special code from Telegram.
                    </v-text>
                </v-form-item>

                <v-form-item>
                    <v-input>
                        <template #prefix>
                            +
                        </template>
                    </v-input>
                </v-form-item>

                <v-form-item label="Phone Number">
                    <v-checkbox checked>
                        Log in to the platform with a one-time password in Telegram
                    </v-checkbox>
                </v-form-item>

                <v-form-item>
                    <v-text disabled>
                        Specify your Telegram nickname so that the support team can quickly contact you
                    </v-text>
                </v-form-item>

                <v-form-item label="Telegram nickname">
                    <v-input>
                        <template #prefix>
                            @
                        </template>
                    </v-input>
                </v-form-item>

                <v-form-item action>
                    <v-form-submit
                        block
                    >
                        Connect
                    </v-form-submit>
                </v-form-item>
            </v-form>
        </v-card>
    </v-column>
</v-row>
</template>
