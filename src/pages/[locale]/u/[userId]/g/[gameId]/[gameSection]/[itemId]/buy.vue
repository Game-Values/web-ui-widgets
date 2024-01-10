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
            <v-space
                :size="remToNumber(useTheme('spacing.10'))"
                vertical
            >
                <v-title :level="1">
                    New Deal
                </v-title>

                <entity-buy-steps />

                <entity-buy-view />
            </v-space>
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="14"
            :md="12"
            :xs="24"
        >
            <faq-collapse>
                <entity-buy-faq />
            </faq-collapse>
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <faq-form :height="575" />
        </v-column>
    </v-row>
</ui-page>
</template>
