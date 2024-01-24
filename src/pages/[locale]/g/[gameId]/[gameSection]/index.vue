<script lang="ts" setup>
import { GameSubsection } from "~/dto"
import { Facet, FilterType, RouteLayout } from "~/enums"
import { createModel } from "~/factories"

definePageMeta({
    layout: RouteLayout.GAME,
})

let { gameFacade } = useFacades()

await gameFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row align="middle">
        <v-column>
            <entity-game-info />
        </v-column>

        <v-column :lg="12">
            <entity-game-filter
                :subsection="
                    createModel(GameSubsection, {
                        type: FilterType.SEARCH,
                    })
                "
                :facet="Facet.DESCRIPTION"
            />
        </v-column>

        <v-column :lg="12">
            <entity-game-online-players-switch />
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="6"
            :md="12"
        >
            <lazy-client-only>
                <entity-game-filters />
            </lazy-client-only>
        </v-column>

        <v-column
            :lg="18"
            :md="24"
        >
            <v-space vertical>
                <entity-game-selected-filters />

                <entity-game-lots />
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
                <entity-game-faq />
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
