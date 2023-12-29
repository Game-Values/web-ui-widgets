<script lang="ts" setup>
defineProps<{
    modelValue: boolean
    notification: string
}>()

defineEmits<{
    (e: "update:model-value", modelValue: boolean): void
}>()
</script>

<template>
<v-space
    class="
        px-7
        py-5
        bg-white-02
        rounded-3
    "
    align="center"
    justify="space-between"
>
    <v-text disabled>
        {{ notification }}
    </v-text>

    <v-switch
        :value="modelValue"
        @update:value="$emit('update:model-value', $event)"
    />
</v-space>
</template>
