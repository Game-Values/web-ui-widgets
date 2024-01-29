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
                    <v-highlight
                        :key-words="[
                            'Quick Sales',
                        ]"
                        content="Quick Sales Our way of selling is simple, so you can sell your gaming stuff fast to people who really want to buy."
                    >
                        <template #light="{ text }">
                            <v-text
                                type="success"
                                strong
                            >
                                {{ text }}
                            </v-text>
                        </template>
                    </v-highlight>
                </li>

                <li>
                    <v-highlight
                        :key-words="[
                            'Safe Trading',
                        ]"
                        content="Safe Trading Feel safe when you sell. We use strong safety steps to protect your sales."
                    >
                        <template #light="{ text }">
                            <v-text
                                type="success"
                                strong
                            >
                                {{ text }}
                            </v-text>
                        </template>
                    </v-highlight>
                </li>

                <li>
                    <v-highlight
                        :key-words="[
                            'Fair Prices',
                        ]"
                        content="Fair Prices You can make good money because we help you set prices that buyers like."
                    >
                        <template #light="{ text }">
                            <v-text
                                type="success"
                                strong
                            >
                                {{ text }}
                            </v-text>
                        </template>
                    </v-highlight>
                </li>

                <li>
                    <v-highlight
                        :key-words="[
                            'Always Here to Help',
                        ]"
                        content="Always Here to Help Got questions? We're here to help, any day, any time."
                    >
                        <template #light="{ text }">
                            <v-text
                                type="success"
                                strong
                            >
                                {{ text }}
                            </v-text>
                        </template>
                    </v-highlight>
                </li>

                <li>
                    <v-highlight
                        :key-words="[
                            'Worldwide Buyers',
                        ]"
                        content="Worldwide Buyers People from all over can see and buy what you're selling."
                    >
                        <template #light="{ text }">
                            <v-text
                                type="success"
                                strong
                            >
                                {{ text }}
                            </v-text>
                        </template>
                    </v-highlight>
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
