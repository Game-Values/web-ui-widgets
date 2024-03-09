<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

let { storeClient } = useClients()
let { orderFacade } = useFacades()

let { order } = storeToRefs(storeClient.orderStore)

await orderFacade.bootstrap()
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
                    <i18n-t
                        keypath="template.Deal"
                        scope="global"
                    >
                        <template #deal>
                            {{ order.id }}
                        </template>
                    </i18n-t>
                </v-title>

                <entity-buy-steps />

                <entity-buy-view />
            </v-space>
        </v-column>

        <v-column
            :md="10"
            :xs="0"
        >
            <widget-chat-order />
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
            <faq-form
                class="
                    bg-[url(/images/faq.png)]
                    bg-no-repeat
                "
                style="
                    background-position: center 25%;
                "
                :height="575"
            />
        </v-column>
    </v-row>
</ui-page>
</template>
