<script lang="ts" setup>
let { mainFacade } = useFacades()
let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)

await mainFacade.bootstrap()

console.log(games)
</script>

<template>
<widget-wrapper-page>
    main-page
</widget-wrapper-page>
</template>
