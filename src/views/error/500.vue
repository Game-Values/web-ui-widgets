<script lang="ts" setup>
let mainRoute = useMainRoute()
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
        <ui-button-link
            :to="mainRoute"
            type="primary"
        >
            Home
        </ui-button-link>
    </v-column>
</v-row>
</template>
