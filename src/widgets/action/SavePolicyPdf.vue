<script lang="ts" setup>
let { routerClient } = useClients()

let pathToPdf = computed((): string => `/zip/${routerClient.route.name}.zip`)
</script>

<template>
<ui-link-button :href="pathToPdf">
    <v-space align="center">
        <ui-icon heroicons="arrow-down-tray" />

        <v-text>
            Save PDF
        </v-text>
    </v-space>
</ui-link-button>
</template>
