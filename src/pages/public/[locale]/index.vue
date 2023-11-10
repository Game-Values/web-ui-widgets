<script lang="ts" setup>
let { mainFacade } = useFacades()
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)

await mainFacade.bootstrap()
</script>

<template>
<ui-layout-page>
    <entity-main-slider />
</ui-layout-page>
</template>
