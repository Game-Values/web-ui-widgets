<script lang="ts" setup>
import type { RouteLocation } from "vue-router"
</script>

<template>
<widget-wrapper-app>
    <nuxt-layout>
        <nuxt-page
            :id="($route.name as string)"
            :page-key="(route: RouteLocation) => route.fullPath"
        />
    </nuxt-layout>
</widget-wrapper-app>
</template>
