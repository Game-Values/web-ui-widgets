<script lang="ts" setup>
useI18n()
</script>

<template>
<v-row class="w-full">
    <v-column
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="game.Server"
                    scope="global"
                />
            </v-title>

            <v-text>
                Very long server name
            </v-text>
        </v-space>
    </v-column>

    <v-column
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="game.Availability"
                    scope="global"
                />
            </v-title>

            <v-text>
                120
            </v-text>
        </v-space>
    </v-column>

    <v-column
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="label.Currency"
                    scope="global"
                />
            </v-title>

            <v-text>
                Gold
            </v-text>
        </v-space>
    </v-column>

    <v-column
        :sm="12"
        :xs="24"
    >
        <v-space vertical>
            <v-title
                :color="useTheme('colors.secondary')"
                class="uppercase"
                thin
            >
                <i18n-t
                    keypath="order.Price per unit"
                    scope="global"
                />
            </v-title>

            <v-text>
                20,22
            </v-text>
        </v-space>
    </v-column>
</v-row>
</template>
