<script lang="ts" setup>
let { buyFacade } = useFacades()

await buyFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            :md="14"
            :xs="24"
        >
            <v-space vertical>
                <v-title :level="1">
                    <i18n-t
                        keypath="template.Deal"
                        scope="global"
                    />
                </v-title>

                <entity-buy-steps />

                <entity-buy-view />
            </v-space>
        </v-column>

        <v-column
            :md="10"
            :xs="0"
        >
            // todo: chat
        </v-column>
    </v-row>

    <v-row>
        <v-column>
            <app-faq />
        </v-column>
    </v-row>
</ui-page>
</template>
