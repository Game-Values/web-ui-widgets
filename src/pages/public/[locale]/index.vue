<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-layout-page>
    <ui-layout-row>
        <ui-layout-col
            :lg="19"
            :span="24"
        >
            <entity-main-slider />
        </ui-layout-col>

        <ui-layout-col
            :lg="5"
            :span="24"
            :use-flex="{
                justify: 'end',
            }"
            class="lg:(mb-10 self-center)"
        >
            <entity-main-statistics />
        </ui-layout-col>
    </ui-layout-row>

    <ui-layout-row>
        <ui-layout-col
            :lg="18"
            :span="24"
        >
            <entity-main-games />
        </ui-layout-col>

        <ui-layout-col
            :lg="6"
            :span="0"
        >
            // TODO: Chat
        </ui-layout-col>
    </ui-layout-row>
</ui-layout-page>
</template>
