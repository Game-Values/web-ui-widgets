<template>
<header
    :style="{
        height: useTheme(`height.header-${getRef(useBreakpoint())}`),
    }"
    class="relative z-1"
>
    <ui-layout-content>
        <ui-layout-row
            align="middle"
            style="
                --vxp-row-v-gap: 0;
            "
        >
            <ui-layout-col
                :lg="5"
                :md="6"
                :sm="8"
                :xs="12"
            >
                <ui-base-link :to="useMainRoute().fullPath">
                    <ui-base-icon
                        custom="logo"
                        height="40"
                        width="158"
                    />
                </ui-base-link>
            </ui-layout-col>

            <ui-layout-col
                :lg="8"
                :md="8"
                :sm="12"
                :xs="0"
            >
                <!-- todo: component & i18n -->
                <ui-form-input
                    class="
                        lg:(max-w-39rem)
                        sm:(flex!)
                        xs:(hidden!)
                    "
                    placeholder="Search"
                    clearable
                >
                    <template #suffix>
                        <ui-base-icon size="18">
                            <i class="i-heroicons:magnifying-glass" />
                        </ui-base-icon>
                    </template>
                </ui-form-input>
            </ui-layout-col>

            <ui-layout-col
                :span="0"
                :lg="7"
                :md="8"
            >
                <!-- todo: component & i18n -->
                <nav>
                    <ui-layout-space>
                        <ui-base-link>
                            <ui-typography-title :level="6">
                                Blog
                            </ui-typography-title>
                        </ui-base-link>

                        <ui-base-link>
                            <ui-typography-title :level="6">
                                Promotions
                            </ui-typography-title>
                        </ui-base-link>

                        <ui-base-link>
                            <ui-typography-title :level="6">
                                TOP-10
                            </ui-typography-title>
                        </ui-base-link>

                        <ui-base-link>
                            <ui-typography-title :level="6">
                                AI Assistant
                            </ui-typography-title>
                        </ui-base-link>
                    </ui-layout-space>
                </nav>
            </ui-layout-col>

            <ui-layout-col
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
                        <ui-base-link type="primary">
                            <ui-typography-title :level="6">
                                Log In
                            </ui-typography-title>
                        </ui-base-link>
                    </li>

                    <li>
                        <ui-base-link type="primary">
                            <ui-typography-title :level="6">
                                Sign up
                            </ui-typography-title>
                        </ui-base-link>
                    </li>
                </ul>
            </ui-layout-col>

            <ui-layout-col
                :span="0"
                :xs="5"
            >
                <!-- todo: component & i18n -->
                <ui-base-button
                    class="sm:(hidden!)"
                    size="small"
                    text
                >
                    <ui-base-icon size="24">
                        <i class="i-heroicons:magnifying-glass" />
                    </ui-base-icon>
                </ui-base-button>
            </ui-layout-col>

            <ui-layout-col
                :lg="0"
                :md="2"
                :sm="4"
                :xs="5"
            >
                <header-mobile-menu />
            </ui-layout-col>
        </ui-layout-row>
    </ui-layout-content>
</header>
</template>
