<template>
<ui-page>
    <v-row>
        <v-column :lg="18">
            <v-row>
                <v-column>
                    <user-card />
                </v-column>

                <v-column>
                    <entity-account-tabs />
                </v-column>
            </v-row>
        </v-column>

        <v-column :lg="6">
            <entity-account-statistic />
        </v-column>
    </v-row>
</ui-page>
</template>
