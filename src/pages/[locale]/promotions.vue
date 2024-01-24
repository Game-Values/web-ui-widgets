<script lang="ts" setup>
import type { Callable } from "~/types"

let { registrationModal } = useModals()

let sliderAction = computed((): (
    {
        handler: Callable
        label: string
    } | undefined
) => (
    {
        handler: (): boolean | void => !isAuthenticated() && registrationModal.show(),
        label: "Learn more",
    }
))
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            v-for="i in 3"
            :key="i"
        >
            <v-card>
                <slide-main
                    :tag="{
                        color: 'error',
                        label: '1 d. 5 h. 8 m.',
                    }"
                    style="
                        max-height: 292px;
                        background-color: #151515;
                        background-position: 100% 50%;
                        background-size: contain;
                        background-blend-mode: lighten;
                    "
                    :action="sliderAction"
                    class="rounded-2xl border-solid-secondary"
                    src="/images/promotion-iphone.png"
                    text="Participate in a new promotion"
                    title="Win an iPhone 15"
                />
            </v-card>
        </v-column>
    </v-row>
</ui-page>
</template>
