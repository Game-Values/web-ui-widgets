<script lang="ts" setup>
let { mainFacade } = useFacades()

await mainFacade.bootstrap()
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
</div>
</template>
