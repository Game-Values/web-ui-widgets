<script lang="ts" setup>
import type { RouteLocation } from "vue-router"

let { storeClient } = useClients()

let { user } = storeToRefs(storeClient.userMeStore)
</script>

<template>
<ui-page>
    <v-row>
        <v-column :lg="18">
            <v-row>
                <v-column>
                    <user-card :user="user" />
                </v-column>

                <v-column>
                    <app-router-view />
<!--                    <entity-account-tabs />-->
                </v-column>
            </v-row>
        </v-column>

        <v-column :lg="6">
            <entity-account-statistic />
        </v-column>
    </v-row>
</ui-page>
</template>
