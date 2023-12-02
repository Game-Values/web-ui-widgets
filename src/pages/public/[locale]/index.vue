<script lang="ts" setup>
let { lg } = useBreakpoints()

let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            :lg="18"
            :xs="24"
        >
            <entity-main-slider />
        </v-column>

        <v-column
            :lg="5"
            :offset="lg ? 1 : 0"
            :use-flex="{
                justify: 'end',
            }"
            :xs="24"
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

    <v-row>
        <v-column>
            <app-faq />
        </v-column>
    </v-row>
</ui-page>
</template>
