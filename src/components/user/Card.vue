<script lang="ts" setup>
import type { User } from "~/dto"

defineProps<{
    user: User
}>()
</script>

<template>
<v-card>
    <v-space
        size="large"
        no-wrap
    >
        <user-profile-avatar :premium="Boolean(useRoute().params.userId % 2)" />

        <v-space
            size="large"
            vertical
        >
            <v-space
                align="start"
                justify="space-between"
            >
                <v-title :level="1">
                    {{ user.full_name }}
                </v-title>

                <v-space
                    align="center"
                    class="text-lg"
                    size="small"
                >
                    <v-text type="primary">
                        Level
                    </v-text>

                    <ui-icon
                        color="primary"
                        heroicons="arrow-small-up"
                    />

                    <v-text type="primary">
                        12
                    </v-text>
                </v-space>
            </v-space>

            <v-text
                type="success"
                strong
            >
                Online
            </v-text>

            <v-text disabled>
                Brief profile description, seller or store information in 2-3 lines
            </v-text>

            <widget-wrapper-unauth-only>
                <v-button>
                    Send Message
                </v-button>
            </widget-wrapper-unauth-only>
        </v-space>

        <ui-icon
            color="secondary"
            heroicons="exclamation-triangle"
            size="24"
        />
    </v-space>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-v-padding: theme("spacing.10")
    --vxp-card-body-h-padding: theme("spacing.8")
    --vxp-card-b-color: #{rgba($color-white, 0.2)}
    --vxp-card-border: var(--vxp-border-shape) var(--vxp-card-b-color)
</style>
