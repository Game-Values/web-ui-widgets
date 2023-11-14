<script lang="ts" setup>
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
    default: () => VNode
    icon: () => VNode
    loading: () => VNode
}>()

let bindingProps = useOmit(props, "action")

let isLoading = ref(false)

async function callAction() {
    setRef(isLoading, true)

    await props.action()
    await promiseTimeout(DEFAULT_TIMEOUT)

    setRef(isLoading, false)
}
</script>

<template>
<ui-base-button
    v-bind="bindingProps"
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
</ui-base-button>
</template>
