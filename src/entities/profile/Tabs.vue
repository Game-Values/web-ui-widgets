<script setup lang="ts">
import type { AsyncComponent } from "~/types"
import type { Component } from "vue"

import { PROFILE_TABS } from "~/consts"
import { ProfileTab } from "~/enums"

let profileTab = ref(ProfileTab.STOREFRONT)

let profileViews = computed((): Record<ProfileTab, AsyncComponent> => (
    {
        [ProfileTab.REVIEWS]: defineAsyncComponent((): Component => import("~/views/profile/Reviews.vue")),
        [ProfileTab.STOREFRONT]: defineAsyncComponent((): Component => import("~/views/profile/Storefront.vue")),
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
