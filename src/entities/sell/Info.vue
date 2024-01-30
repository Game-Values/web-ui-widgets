<template>
<v-card
    :style="{
        backgroundImage: 'url(/images/monster-1.png)',
    }"
    class="
        bg-no-repeat
        bg-contain
        bg-right
    "
>
    <v-row
        :gap="[
            remToNumber(useTheme('spacing.11')),
            remToNumber(useTheme('spacing.11')),
        ]"
    >
        <v-column>
            <v-title :level="1">
                Sell with Us!
            </v-title>
        </v-column>

        <v-column>
            <v-space
                size="small"
                vertical
            >
                <v-text
                    style="--vxp-text-font-weight-strong: 700;"
                    strong
                >
                    Join our active community and experience the convenience and security of our GameValues platform.
                </v-text>

                <v-text
                    style="--vxp-text-font-weight-strong: 700;"
                    strong
                >
                    We prioritize your peace of mind, ensuring every transaction is not just swift but also safeguarded.
                </v-text>
            </v-space>
        </v-column>

        <v-column :offset="1">
            <v-u-l>
                <li>
                    <v-text strong>
                        Quick Sales
                    </v-text>

                    Our way of selling is simple, so you can sell your gaming stuff fast to people who really want to buy.
                </li>

                <li>
                    <v-text strong>
                        Safe Trading
                    </v-text>

                    Feel safe when you sell. We use strong safety steps to protect your sales.
                </li>

                <li>
                    <v-text strong>
                        Fair Prices
                    </v-text>

                    You can make good money because we help you set prices that buyers like.
                </li>

                <li>
                    <v-text strong>
                        Always Here to Help
                    </v-text>

                    Got questions? We're here to help, any day, any time.
                </li>

                <li>
                    <v-text strong>
                        Worldwide Buyers
                    </v-text>

                    People from all over can see and buy what you're selling.
                </li>
            </v-u-l>
        </v-column>
    </v-row>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-v-padding: theme("spacing.12")
    --vxp-card-body-h-padding: theme("spacing.10")

.vxp-card
    @apply border-solid-secondary rounded-5
    @apply backdrop-blur-4
</style>
