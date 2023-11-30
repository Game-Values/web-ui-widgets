<script lang="ts" setup>
import type { AsyncComponent } from "~/types"
import type { H3Error } from "h3"
import type { Component } from "vue"

import { default as HttpStatus } from "http-status"

import { Layout } from "~/enums"

interface Props {
    error: H3Error
}

let props = defineProps<Props>()

let errorViews = computed((): Record<number, AsyncComponent> => (
    {
        [HttpStatus.INTERNAL_SERVER_ERROR]: defineAsyncComponent((): Promise<Component> => import("~/views/error/500.vue")),
    }
))

let errorView = computed((): AsyncComponent => (
    useGet(getRef(errorViews), props.error.statusCode) ||
    useGet(getRef(errorViews), HttpStatus.INTERNAL_SERVER_ERROR)
))
</script>

<template>
<widget-wrapper-app :layout="Layout.ERROR">
    <ui-page>
        <component :is="errorView" />
    </ui-page>
</widget-wrapper-app>
</template>
