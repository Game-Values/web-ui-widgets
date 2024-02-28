<script lang="ts" setup>
import type { Callable } from "~/types"
import type { ConfirmOptions } from "vexip-chat-send-hub-message"

defineProps<{
    cancel: Callable<boolean>
    confirm: Callable<boolean>
    confirmOptions: ConfirmOptions
}>()
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-title
        :level="3"
        class="text-center"
    >
        Do you want to remove this item?
    </v-title>

    <v-space
        justify="center"
        size="large"
    >
        <ui-confirm-button
            circle
            @click="cancel()"
        >
            <ui-icon
                color="negative-medium"
                heroicons="hand-thumb-down-solid"
                size="50"
            />
        </ui-confirm-button>

        <ui-confirm-button
            circle
            @click="confirm()"
        >
            <ui-icon
                color="positive-light"
                heroicons="hand-thumb-up-solid"
                size="50"
            />
        </ui-confirm-button>
    </v-space>
</v-space>
</template>
