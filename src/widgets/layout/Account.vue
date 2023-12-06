<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { storeClient } = useClients()

let { user: me } = storeToRefs(storeClient.userMeStore)
let { user } = storeToRefs(storeClient.userStore)
</script>

<template>
<widget-layout-app>
    <ui-content>
        <v-row>
            <v-column :lg="18">
                <v-row>
                    <v-column>
                        <widget-wrapper-auth-only>
                            <user-card :user="me" />
                        </widget-wrapper-auth-only>

                        <widget-wrapper-unauth-only>
                            <user-card :user="user" />
                        </widget-wrapper-unauth-only>
                    </v-column>

                    <v-column>
                        <slot />
                    </v-column>
                </v-row>
            </v-column>

            <v-column :lg="6">
                <entity-account-statistic />
            </v-column>
        </v-row>
    </ui-content>
</widget-layout-app>
</template>
