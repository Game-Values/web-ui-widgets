<script lang="ts" setup>
// import { TIMEOUT_DEBOUNCE } from "~/consts"
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()

let isMobileMenuActive = ref(false)

// let layoutRef = ref()

// let mutationCallback = useDebounceFn((): Promise<void> => (
//     useNextTick((): void => layoutRef.value.scroll.refresh())
// ), TIMEOUT_DEBOUNCE)

// useMutationObserver(layoutRef, mutationCallback, { childList: true, subtree: true })
// useResizeObserver(layoutRef, mutationCallback)
</script>

<template>
<ui-base-layout
    footer
    header-fixed
    no-aside
>
    <template #headerLogo>
        <!-- todo: component (?) -->
        <ui-base-link :to="useMainRoute().fullPath">
            <ui-base-icon
                custom="logo"
                height="40"
                width="158"
            />
        </ui-base-link>
    </template>

    <template #headerMain>
        <div
            class="
                flex
                flex-1
                items-center
                lg:(gap-x-14)
                sm:(gap-x-11)
            "
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

            <!-- todo: component & i18n -->
            <nav
                class="
                    hidden
                    gap-x-10
                    lg:(flex)
                "
            >
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
            </nav>
        </div>
    </template>

    <template #headerRight>
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

        <!-- todo: component & i18n -->
        <ui-base-button
            class="lg:(hidden!)"
            size="small"
            text
            @click="isMobileMenuActive = true"
        >
            <ui-base-icon size="30">
                <i class="i-heroicons:bars-3" />
            </ui-base-icon>
        </ui-base-button>
    </template>

    <slot />

    <!-- todo: component & i18n -->
    <ui-effect-drawer
        v-model:active="isMobileMenuActive"
        width="100%"
        closable
        @close="isMobileMenuActive = false"
    >
        <template #title>
            <ul
                class="
                    flex
                    gap-x-10
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
        </template>

        <!-- todo: component & i18n -->
        <nav
            class="
                flex-col
                gap-y-10
            "
        >
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
        </nav>
    </ui-effect-drawer>
</ui-base-layout>
</template>

<style lang="sass" scoped>
:deep(.vxp-layout__header)
    @apply lg:(gap-x-14)
    @apply sm:(gap-x-11)
</style>
