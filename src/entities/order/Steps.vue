<script lang="ts" setup>
useI18n()

let { storeClient } = useClients()

let { orderStepIndex, orderSteps } = storeToRefs(storeClient.orderStore)
</script>

<template>
<v-timeline horizontal>
    <v-timeline-item
        v-for="(_orderStep, i) in orderSteps"
        :key="_orderStep"
        :label="_orderStep"
        :style="{
            '--vxp-timeline-pointer-size': useTheme('spacing.13'),
            '--vxp-timeline-line-color': (
                orderStepIndex > i
                    ? useTheme('colors.primary')
                    : useTheme('colors.secondary')
            ),
        }"
    >
        <v-text strong>
            <i18n-t :keypath="_orderStep" />
        </v-text>

        <template #signal>
            <div
                :style="{
                    backgroundColor: (
                        orderStepIndex + 1 > i
                            ? useTheme('colors.primary')
                            : useTheme('colors.secondary')
                    ),
                    color: (
                        orderStepIndex + 1 > i
                            ? useTheme('colors.white')
                            : useTheme('colors.grey-dark')
                    ),
                    boxShadow: orderStepIndex === i
                        ? '0 0.6rem 5.5rem 0 rgba(61, 152, 255, 0.4)'
                        : '',
                }"
                class="
                    fit
                    flex-center
                    rounded-full
                    text-level-4
                    font-semibold
                    leading-none
                "
            >
                <ui-icon
                    v-if="orderStepIndex > i"
                    heroicons="check"
                    size="24"
                />

                <v-text v-else>
                    {{ i + 1 }}
                </v-text>
            </div>
        </template>
    </v-timeline-item>
</v-timeline>
</template>

<i18n lang="yaml">
de:
    CHOOSE_DEAL: Deal-Parameter auswählen
    CONFIRM_ORDER: Bestätigen Sie die Bestellung und führen Sie die Zahlung durch
    CONFIRM_RECEIPT: Bestätigen Sie den Empfang des Artikels
en:
    CHOOSE_DEAL: Choose deal parameters
    CONFIRM_ORDER: Confirm the order and make the payment
    CONFIRM_RECEIPT: Confirm receipt of the item
</i18n>
