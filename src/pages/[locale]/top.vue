<template>
<ui-overlay
    :style="{
        position: 'absolute',
        top: '-7rem',
    }"
    height="500"
>
    <ui-image src="/images/top-10-cover.png" />

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
        <v-column>
            <ui-image src="/images/top-10-dummy.png" />
        </v-column>

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
