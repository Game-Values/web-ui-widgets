<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            :lg="20"
            :xs="24"
        >
            <entity-main-slider />
        </v-column>

        <v-column
            :use-flex="{
                justify: 'end',
            }"
            :lg="4"
            :xs="24"
            class="lg:(mb-10 self-center)"
        >
            <v-space
                class="
                    lg:(flex)
                    xs:(hidden)
                "
            />

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
            <faq-form />
        </v-column>
    </v-row>
</ui-page>
</template>
