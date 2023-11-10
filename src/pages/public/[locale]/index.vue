<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-layout-page>
    <entity-main-slider />

    <ui-layout-row>
        <ui-layout-col :span="20">
            <entity-main-games />
        </ui-layout-col>

        <ui-layout-col :span="4">
            Chat
        </ui-layout-col>
    </ui-layout-row>
</ui-layout-page>
</template>
