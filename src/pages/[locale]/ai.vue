<template>
<ui-page>
    <v-row>
        <v-column>
            <ui-overlay
                :style="{
                    position: 'absolute',
                    top: '-7rem',
                }"
                class="h-screen!"
                overlay-class="mt-5rem"
            >
                <ui-image src="/images/404.png" />

                <template #overlay>
                    <view-error-404 />
                </template>
            </ui-overlay>

        </v-column>
    </v-row>
</ui-page>
</template>
