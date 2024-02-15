<script lang="ts" setup>
import { FooterLogoEntity } from "~/entities/footer"
</script>

<template>
<v-footer :app="true">
    <v-container>
        <v-row>
            <v-col>
                <footer-logo-entity />
            </v-col>
        </v-row>
    </v-container>
</v-footer>
</template>
