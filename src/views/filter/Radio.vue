<script lang="ts" setup>
defineProps<{
    buckets: { info: string, label: string }[] | string[]
    value: string
}>()

defineEmits<{
    (e: "change", modelValue: string): void
}>()
</script>

<template>
<v-radio-group
    :value="value"
    vertical
    @change="$emit('change', $event)"
>
    <template
        v-for="bucket in buckets"
        :key="bucket.value || bucket.label || bucket"
    >
        <v-radio
            :label="bucket.label || bucket"
            :value="bucket.value || bucket.label || bucket"
        >
            <v-space
                align="center"
                size="small"
            >
                <v-text>
                    {{ bucket.label || bucket }}
                </v-text>

                <v-tooltip v-if="bucket.info">
                    <template #trigger>
                        <ui-icon
                            heroicons="information-circle"
                            size="18"
                        />
                    </template>

                    <v-text v-html="bucket.info" />
                </v-tooltip>
            </v-space>
        </v-radio>
    </template>
</v-radio-group>
</template>
