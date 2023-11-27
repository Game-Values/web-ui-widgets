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
    align="center"
    class="
        px-7
        py-5
        bg-white-02
        rounded-3
    "
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
