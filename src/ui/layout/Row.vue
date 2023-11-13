<script lang="ts" setup>
import type { RowProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<RowProps>(), {
    gap: remToNumber(useThemeSpace(9)),
    columnFlex: true,
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-row
    v-bind="$props"
    :style="`
        --vxp-row-h-gap: ${pxToRem(isArray(gap) ? useFirst(gap) : gap)};
        --vxp-row-v-gap: ${pxToRem(isArray(gap) ? useLast(gap) : gap)};
    `"
>
    <slot/>
</v-row>
</template>
