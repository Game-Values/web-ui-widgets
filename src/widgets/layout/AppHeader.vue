<template>
<header class="relative z-1">
    <ui-content>
        <v-row
            align="middle"
            style="
                --vxp-row-v-gap: 0;
            "
        >
            <v-column
                :lg="5"
                :md="6"
                :sm="8"
                :xs="12"
            >
                <ui-link :to="useMainRoute().fullPath">
                    <ui-icon
                        custom="logo"
                        height="40"
                        width="158"
                    />
                </ui-link>
            </v-column>

            <v-column
                :lg="8"
                :md="8"
                :sm="12"
                :xs="0"
            >
                <!-- todo: component & i18n -->
                <v-input
                    class="
                        lg:(max-w-39rem)
                        sm:(flex!)
                        xs:(hidden!)
                    "
                    placeholder="Search"
                    clearable
                >
                    <template #suffix>
                        <ui-icon
                            heroicons="magnifying-glass"
                            size="18"
                        />
                    </template>
                </v-input>
            </v-column>

            <v-column
                :span="0"
                :lg="7"
                :md="8"
            >
                <!-- todo: component & i18n -->
                <nav>
                    <v-space>
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
                :span="0"
                :lg="4"
                :use-flex="{
                    align: 'end',
                }"
            >
                <!-- todo: component & i18n -->
                <ul
                    class="
                        hidden
                        gap-x-10
                        lg:(flex)
                    "
                >
                    <li>
                        <ui-link type="primary">
                            <v-title :level="6">
                                Log In
                            </v-title>
                        </ui-link>
                    </li>

                    <li>
                        <ui-link type="primary">
                            <v-title :level="6">
                                Sign up
                            </v-title>
                        </ui-link>
                    </li>
                </ul>
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
                :md="2"
                :sm="4"
                :xs="5"
            >
                <header-mobile-menu />
            </v-column>
        </v-row>
    </ui-content>
</header>
</template>
