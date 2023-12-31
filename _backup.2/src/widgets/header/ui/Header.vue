<script lang="ts" setup>
import { HeaderLogoEntity } from "~/entities/header"
import { LotSearchFeature } from "~/features/lot"
</script>

<template>
<v-app-bar height="92">
    <v-container>
        <v-row align="center">
            <v-col
                lg="2"
            >
                <header-logo-entity />
            </v-col>

            <v-col>
                <lot-search-feature />
            </v-col>

            <v-col>
                Links
            </v-col>

            <v-col>
                Login
            </v-col>
        </v-row>
    </v-container>
</v-app-bar>
</template>
