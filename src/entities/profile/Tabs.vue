<script setup lang="ts">
import type { AsyncComponent } from "~/types"

import { PROFILE_TABS } from "~/consts"
import { ProfileTab } from "~/enums"

let profileTab = ref("Storefront")

let profileViews = computed((): Record<OrderStep, AsyncComponent> => (
    {
        [ProfileTab.REVIEWS]: resolveAsyncComponent("views/profile/Reviews.vue"),
        [ProfileTab.STOREFRONT]: resolveAsyncComponent("views/profile/Storefront.vue"),
    }
))

let profileView = computed((): AsyncComponent => (
    useGet(
        getRef(profileViews),
        getRef(profileTab),
    )
))
</script>

<template>
<app-tabs
    v-model="profileTab"
    :tabs="PROFILE_TABS"
>
    <template #tab>
        <component :is="profileView" />
    </template>
</app-tabs>
</template>
