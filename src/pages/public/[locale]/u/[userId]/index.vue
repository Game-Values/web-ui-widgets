<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.ACCOUNT_USER,
})

let { userFacade } = useFacades()

await userFacade.bootstrap()
</script>

<template>
<ui-page>
    <app-router-view />
</ui-page>
</template>
