<script lang="ts" setup>
import type { AsyncComponent } from "~/types"
import type { H3Error } from "h3"
import type { Component } from "vue"

import { HttpStatus, RouteLayout } from "~/enums"

interface Props {
    error: H3Error
}

let props = defineProps<Props>()

let errorViews = computed((): Record<number, AsyncComponent> => (
    {
        [HttpStatus.INTERNAL_SERVER_ERROR]: defineAsyncComponent((): Promise<Component> => import("~/views/error/500.vue")),
        [HttpStatus.NOT_FOUND]: defineAsyncComponent((): Promise<Component> => import("~/views/error/404.vue")),
    }
))

let errorView = computed((): AsyncComponent => (
    getRef(errorViews, props.error.statusCode) ||
    getRef(errorViews, HttpStatus.INTERNAL_SERVER_ERROR)
))

// todo: logger (?)
console.log(props.error)
</script>

<template>
<widget-wrapper-app :layout="RouteLayout.ERROR">
    <ui-page>
        <component :is="errorView" />
    </ui-page>
</widget-wrapper-app>
</template>
