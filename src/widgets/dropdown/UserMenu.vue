<script lang="ts" setup>
let { routerClient } = useClients()
let { authController } = useControllers()
</script>

<template>
<v-dropdown placement="bottom-start">
    <v-button text>
        <user-header-avatar />
    </v-button>

    <template #drop>
        <v-dropdown-list class="w-25rem">
            <v-dropdown-item>
                Deals
            </v-dropdown-item>

            <v-dropdown-item>
                Messages
            </v-dropdown-item>

            <ui-link-dropdown-item
                :to="routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_FAVORITES)"
                divided
            >
                Favorites
            </ui-link-dropdown-item>

            <ui-link-dropdown-item :to="routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT)">
                Account
            </ui-link-dropdown-item>

            <ui-link-dropdown-item :to="routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS)">
                Settings
            </ui-link-dropdown-item>

            <v-dropdown-item>
                <v-space justify="space-between">
                    <v-text>
                        Language
                    </v-text>

                    <v-text>
                        English
                    </v-text>
                </v-space>
            </v-dropdown-item>

            <v-dropdown-item divided>
                <v-space justify="space-between">
                    <v-text>
                        Currency
                    </v-text>

                    <v-text>
                        US Dollar
                    </v-text>
                </v-space>
            </v-dropdown-item>

            <v-dropdown-item divided>
                Seller's account
            </v-dropdown-item>

            <v-dropdown-item>
                Referral program
            </v-dropdown-item>

            <ui-link-dropdown-item :to="routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ)">
                Help
            </ui-link-dropdown-item>

            <v-dropdown-item divided>
                Feedback
            </v-dropdown-item>

            <v-dropdown-item
                @select="
                    authController.logout()
                        .then((): void => reloadNuxtApp())
                "
            >
                <v-text type="error">
                    Log Out
                </v-text>
            </v-dropdown-item>
        </v-dropdown-list>
    </template>
</v-dropdown>
</template>
