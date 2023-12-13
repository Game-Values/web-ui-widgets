<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.ACCOUNT_ME_SETTINGS,
})
</script>

<template>
<ui-page>
    <app-router-view />
</ui-page>
</template>
