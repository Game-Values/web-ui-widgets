<script lang="ts" setup>
let { routerClient } = useClients()
</script>

<template>
<v-space
    size="large"
    vertical
>
    <ui-link :to="routerClient.getRoute(routerClient.routeNames.MAIN)">
        <ui-icon
            custom="logo-uncolored"
            height="40"
            width="158"
        />
    </ui-link>

    <ui-link
        href="https://creativecommons.org/licenses/by-nc/3.0/"
        rel="license"
        target="_blank"
    >
        © 2023 GameValues
    </ui-link>
</v-space>
</template>
