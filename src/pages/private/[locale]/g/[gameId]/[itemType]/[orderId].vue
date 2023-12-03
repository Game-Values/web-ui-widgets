<script lang="ts" setup>
let { routerClient } = useClients()
let { orderFacade } = useFacades()

await orderFacade.bootstrap()
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
                    >
                        <!-- todo: from OrderModel -->
                        <template #orderId>
                            {{ routerClient.getRouteParam("orderId") }}
                        </template>
                    </i18n-t>
                </v-title>

                <entity-order-steps />

                <entity-order-view />
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
