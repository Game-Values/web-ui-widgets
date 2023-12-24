<script lang="ts" setup>
defineProps<{
    items: string[] // todo (?) mb {<key>:<val>}[]
    value: number | string
}>()

defineEmits<{
    (e: "change", modelValue: number | string): void
}>()
</script>

<template>
<v-radio-group
    :value="value"
    vertical
    @change="$emit('change', $event)"
>
    <v-radio
        v-for="item in items"
        :key="item"
        :label="item"
        :value="item"
    />
</v-radio-group>
</template>
