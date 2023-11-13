<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-layout-page>
    <entity-main-slider />

    <ui-layout-row>
        <ui-layout-col
            :lg="20"
            :span="24"
        >
            <entity-main-games />
        </ui-layout-col>

        <ui-layout-col
            :lg="4"
            :span="0"
        >
            // TODO: Chat
        </ui-layout-col>
    </ui-layout-row>
</ui-layout-page>
</template>
