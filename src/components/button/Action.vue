<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { ButtonProps } from "vexip-ui"
import type { VNode } from "vue"

import { promiseTimeout } from "@vueuse/core"

import { DEFAULT_TIMEOUT } from "~/consts"

let props = defineProps<(
    ButtonProps & {
        action: () => Promise<any>
    }
)>()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
    icon: (scopedProps: ScopedProps) => VNode
    loading: (scopedProps: ScopedProps) => VNode
}>()

let isLoading = ref(false)

async function callAction(): Promise<void> {
    setRef(isLoading, true)

    await props.action()
    await promiseTimeout(DEFAULT_TIMEOUT)

    setRef(isLoading, false)
}
</script>

<template>
<v-button
    v-bind="useOmit(props, 'action')"
    :disabled="isLoading"
    :loading="isLoading"
    @click="callAction"
>
    <template v-if="!isLoading">
        <slot v-if="$slots.default" />

        <slot
            v-if="$slots.icon"
            name="icon"
        />
    </template>
</v-button>
</template>
