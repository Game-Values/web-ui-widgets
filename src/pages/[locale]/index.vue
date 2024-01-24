<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
</script>

<template>
<ui-overlay
    :style="{
        position: 'absolute',
        top: '-7rem',
    }"
    height="500"
>
    <ui-image src="/images/bg-main.png" />

    <template #overlay>
        <div
            class="
                fit
                bg-gradient-to-b
                from-black
                from-0%
            "
        />
    </template>
</ui-overlay>

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
            <entity-main-statistics class="lg:(ml-8)" />
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="14"
            :span="24"
        >
            <entity-main-games />
        </v-column>

        <v-column
            :lg="10"
            :span="0"
        >
            <widget-chat-main />
        </v-column>
    </v-row>

    <v-row>
        <v-column>
            <faq-form
                class="
                    bg-[url(/images/faq.png)]
                    bg-no-repeat
                    bg-right-center
                "
            />
        </v-column>
    </v-row>
</ui-page>
</template>
