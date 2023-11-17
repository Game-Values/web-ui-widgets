<script lang="ts" setup>
import type { SwitchProps } from "vexip-ui"

defineProps<SwitchProps>()
</script>

<template>
<v-switch v-bind="$props"/>
</template>

<style lang="scss">
@forward "vexip-ui/style/switch" with (
    $switch: (
        height: theme("height.switch"),
        bg-color-open: theme("colors.secondary"),
        signal-bg-color: theme("colors.secondary"),
    ),
);
</style>

<style lang="sass" scoped>
.vxp-switch--open
    --vxp-switch-signal-bg-color: theme("colors.primary")
</style>
