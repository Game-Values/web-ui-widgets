<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                Withdraw Money
            </v-title>
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <entity-withdraw-form />
        </v-column>
    </v-row>
</ui-page>
</template>
