<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            :lg="19"
            :span="24"
        >
            <entity-main-slider />
        </v-column>

        <v-column
            :lg="5"
            :span="24"
            :use-flex="{
                justify: 'end',
            }"
            class="lg:(mb-10 self-center)"
        >
            <entity-main-statistics />
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="18"
            :span="24"
        >
            <entity-main-games />
        </v-column>

        <v-column
            :lg="6"
            :span="0"
        >
            // TODO: Chat
        </v-column>
    </v-row>
</ui-page>
</template>
