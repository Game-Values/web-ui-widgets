<script lang="ts" setup>
let { routerClient } = useClients()
</script>

<template>
<v-row>
    <v-column>
        <v-title
            :level="2"
            class="text-center"
        >
            This section of the site is under development
        </v-title>
    </v-column>

    <v-column
        :use-flex="{
            justify: 'center',
        }"
    >
        <ui-link-button
            :to="routerClient.getRoute(routerClient.routeNames.MAIN)"
            type="primary"
        >
            Home
        </ui-link-button>
    </v-column>
</v-row>
</template>
