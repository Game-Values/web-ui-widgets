<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.ACCOUNT,
})
</script>

<template>
<ui-page>
    <app-router-view />
</ui-page>
</template>
