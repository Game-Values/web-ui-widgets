<script lang="ts" setup>
let { storeClient } = useClients()
let { loginModal, registrationModal } = useModals()

let { authenticated } = storeToRefs(storeClient.userMeStore)
</script>

<template>
<header class="relative z-1">
    <ui-content>
        <v-row align="middle">
            <v-column
                :lg="4"
                :md="6"
                :sm="8"
                :xs="12"
            >
                <app-logo />
            </v-column>

            <v-column
                :lg="8"
                :md="16"
                :sm="12"
                :xs="0"
            >
                <!-- todo: wrapper or component breakpoint-only -->
                <div
                    class="
                        w-full
                        sm:(block)
                        xs:(hidden)
                    "
                >
                    <!-- todo: component & i18n -->
                    <v-input
                        clearable
                        placeholder="Search"
                    >
                        <template #suffix>
                            <ui-icon
                                heroicons="magnifying-glass"
                                size="18"
                            />
                        </template>
                    </v-input>
                </div>
            </v-column>

            <v-column
                :lg="7"
                :span="0"
                :use-flex="{
                    justify: 'center',
                }"
            >
                <!-- todo: component & i18n -->
                <nav>
                    <v-space size="large">
                        <ui-link>
                            <v-title :level="6">
                                Blog
                            </v-title>
                        </ui-link>

                        <ui-link>
                            <v-title :level="6">
                                Promotions
                            </v-title>
                        </ui-link>

                        <ui-link>
                            <v-title :level="6">
                                TOP-10
                            </v-title>
                        </ui-link>

                        <ui-link>
                            <v-title :level="6">
                                AI Assistant
                            </v-title>
                        </ui-link>
                    </v-space>
                </nav>
            </v-column>

            <v-column
                :lg="5"
                :span="0"
                :use-flex="{
                    align: 'end',
                }"
            >
                <!-- todo: component & i18n -->
                <v-space
                    class="
                        hidden
                        lg:(flex)
                    "
                    justify="end"
                    no-wrap
                    size="large"
                >
                    <!-- todo: component -->
                    <template v-if="authenticated">
                        <ui-link>
                            <ui-icon
                                heroicons="shopping-cart"
                                size="24"
                            />
                        </ui-link>

                        <ui-link>
                            <ui-icon
                                heroicons="envelope"
                                size="24"
                            />
                        </ui-link>

                        <ui-link>
                            <ui-icon
                                heroicons="heart-solid"
                                size="24"
                            />
                        </ui-link>

                        <widget-dropdown-user-menu />
                    </template>

                    <template v-else>
                        <v-button
                            text
                            @click="loginModal.show()"
                            type="primary"
                        >
                            <v-title :level="6">
                                Log In
                            </v-title>
                        </v-button>

                        <v-button
                            text
                            @click="registrationModal.show()"
                            type="primary"
                        >
                            <v-title :level="6">
                                Sign up
                            </v-title>
                        </v-button>
                    </template>
                </v-space>
            </v-column>

            <v-column
                :span="0"
                :xs="5"
            >
                <!-- todo: component & i18n -->
                <v-button
                    class="sm:(hidden!)"
                    size="small"
                    text
                >
                    <ui-icon
                        heroicons="magnifying-glass"
                        size="24"
                    />
                </v-button>
            </v-column>

            <v-column
                :lg="0"
                :sm="2"
                :use-flex="{
                    justify: 'end',
                }"
                :xs="5"
            >
                <header-mobile-menu />
            </v-column>
        </v-row>
    </ui-content>
</header>
</template>
