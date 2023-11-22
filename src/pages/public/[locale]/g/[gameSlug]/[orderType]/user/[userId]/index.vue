<script lang="ts" setup>
// let { userFacade } = useFacades()
//
// await userFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column :lg="14">
            <v-row>
                <v-column>
                    <user-card />
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
