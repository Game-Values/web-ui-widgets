<script lang="ts" setup>
let { storeClient } = useClients()

let { user } = storeToRefs(storeClient.userStore)
</script>

<template>
<ui-page>
    <v-row>
        <v-column :lg="14">
            <v-row>
                <v-column>
                    <user-card :user="user" />
                </v-column>

                <v-column>
                    <entity-profile-tabs />
                </v-column>
            </v-row>
        </v-column>

        <v-column :lg="10">
            <entity-profile-statistic />
        </v-column>
    </v-row>
</ui-page>
</template>
