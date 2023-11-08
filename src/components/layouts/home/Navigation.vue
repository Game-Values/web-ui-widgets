<template>
<header>
    <ui-headless-disclosure v-slot="{ open }" as="nav">
        <ui-layout-content class="mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <ui-headless-disclosure-button
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                    >
                        <span class="sr-only">Open main menu</span>

                        <ui-icon-x-mark
                            v-if="open"
                            size="24"
                        />

                        <ui-icon-bars-3
                            v-else
                            size="24"
                        />
                    </ui-headless-disclosure-button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img
                            alt="logo"
                            src="~/assets/images/logo.png"
                        >
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <nuxt-link
                            :key="`nav-${i}`"
                            :to="nav.to"
                            v-for="(nav, i) in navigation"
                            class="inline-flex items-center px-1 pt-1 font-medium text-gray-100 hover:text-primary"
                        >
                            {{ nav.name }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </ui-layout-content>

        <ui-headless-disclosure-panel class="sm:hidden">
            <div class="space-y-1 pt-2 pb-4">
                <nuxt-link
                    :key="`nav-mobile-${i}`"
                    :to="nav.to"
                    class="block hover:border-l-4 hover:border-rose-500 hover:bg-rose-50 py-2 pl-3 pr-4 font-medium text-rose-700"
                    v-for="(nav, i) in navigation"
                >
                    {{ nav.name }}
                </nuxt-link>
            </div>
        </ui-headless-disclosure-panel>
    </ui-headless-disclosure>
</header>
</template>

<script setup>
const navigation = [
    // { name: "Page:index", to: "/" },
    // { name: "Page:main", to: "/main" },
    // { name: "Page:game", to: "/game" },
    // // { name: "Page:messages", to: "/messages" },
    // { name: "Page:profile", to: "/profile" },
    // // { name: "Page:settings", to: "/settings" },
    // { name: "Page:payment", to: "/payment" },
]
</script>
