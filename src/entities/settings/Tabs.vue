<script setup lang="ts">
import type { AsyncComponent } from "~/types"
import type { Component } from "vue"

import { SETTINGS_TABS } from "~/consts"
import { SettingsTab } from "~/enums"

let settingsTab = ref(SettingsTab.BASIC)

let settingsViews = computed((): Record<SettingsTab, AsyncComponent> => (
    {
        [SettingsTab.BASIC]: defineAsyncComponent((): Promise<Component> => import("~/views/settings/Basic.vue")),
        [SettingsTab.NOTIFICATIONS]: defineAsyncComponent((): Promise<Component> => import("~/views/settings/Notifications.vue")),
        [SettingsTab.REFERRAL]: defineAsyncComponent((): Promise<Component> => import("~/views/settings/Referral.vue")),
        [SettingsTab.SECURITY]: defineAsyncComponent((): Promise<Component> => import("~/views/settings/Security.vue")),
    }
))

let settingsView = computed((): AsyncComponent => (
    useGet(
        getRef(settingsViews),
        getRef(settingsTab),
    )
))
</script>

<template>
<app-tabs
    v-model="settingsTab"
    :tabs="SETTINGS_TABS"
>
    <template #tab>
        <component :is="settingsView" />
    </template>
</app-tabs>
</template>
