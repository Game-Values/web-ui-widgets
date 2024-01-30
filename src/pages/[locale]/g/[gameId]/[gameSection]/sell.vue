<script setup lang="ts">
import { RouteMiddleware } from "~/enums"
import SellPage from "~/pages/[locale]/account/sell.vue"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})
</script>

<template>
<sell-page />
</template>
