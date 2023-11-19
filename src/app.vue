<script lang="ts" setup>
import type { RouteLocation } from "vue-router"
</script>

<template>
<widget-wrapper-app>
    <ui-content>
        <app-breadcrumbs />
    </ui-content>

    <nuxt-page
        :id="($route.name as string)"
        :page-key="(route: RouteLocation) => route.fullPath"
    />
</widget-wrapper-app>
</template>
