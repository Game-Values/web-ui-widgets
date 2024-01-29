<script setup lang="ts">
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

// todo: view

let { storeClient } = useClients()
let { sellFacade } = useFacades()

let { game } = storeToRefs(storeClient.gameStore)

await sellFacade.bootstrap()
</script>

<template>
<div
    :style="{
        backgroundImage: 'url(/icons/sell-bg.svg)',
    }"
    class="
        relative
        -top-10rem
        pt-20rem
        bg-no-repeat
        bg-cover
    "
>
    <ui-icon
        v-if="game?.name"
        style="
            --vpx-icon-width: 100%;
            --vpx-icon-height: 40rem;
        "
        :custom="useKebabCase(game.name)"
        class="absolute top-0 left-0 max-w-full"
    />

    <ui-page>
        <v-row>
            <v-column>
                <entity-sell-info />
            </v-column>
        </v-row>

        <v-row>
            <v-column
                :lg="17"
                :md="19"
            >
                <entity-sell-form />
            </v-column>

            <v-column
                :use-flex="{
                    justify: 'center',
                }"
                :lg="6"
                :md="4"
            >
                <entity-sell-steps class="pt-13 "/>
            </v-column>
        </v-row>

        <v-row>
            <v-column
                :lg="14"
                :md="12"
                :xs="24"
            >
                <faq-collapse>
                    <entity-sell-faq />
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
</div>
</template>
