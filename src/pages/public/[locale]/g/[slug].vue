<script lang="ts" setup>
import { Layout } from "~/enums"

// todo: typing
definePageMeta({
    layout: Layout.GAME,
})

let { gameFacade } = useFacades()

await gameFacade.bootstrap()
</script>

<template>
<ui-layout-page>
    <ui-layout-row>
        <!-- todo: mv to layouts or another location (?) -->
        <ui-layout-col
            class="relative bottom-10rem"
        >
            <ui-navigation-breadcrumb>
                <ui-navigation-breadcrumb-item label="Homepage" class="text-primary" />
                <ui-navigation-breadcrumb-item label="Games" class="text-primary" />
                <ui-navigation-breadcrumb-item label="ArcheAge: Unchained" />
            </ui-navigation-breadcrumb>
        </ui-layout-col>

        <ui-layout-col>
            <entity-game-info />
        </ui-layout-col>
    </ui-layout-row>

    <ui-layout-row align="middle">
        <ui-layout-col :lg="6">
            <entity-game-search />
        </ui-layout-col>

        <ui-layout-col :lg="6">
            <entity-game-online-players-switch />
        </ui-layout-col>
    </ui-layout-row>

    <ui-layout-row>
        <ui-layout-col
            :lg="6"
            :md="12"
        >
            // todo: filters
        </ui-layout-col>

        <ui-layout-col
            :lg="18"
            :md="24"
        >
            <entity-game-lots />
        </ui-layout-col>
    </ui-layout-row>
</ui-layout-page>
</template>
