<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.ACCOUNT_ME,
})

let { userMeFacade } = useFacades()

await userMeFacade.bootstrap()
</script>

<template>
<ui-page>
    <app-router-view />
</ui-page>
</template>
