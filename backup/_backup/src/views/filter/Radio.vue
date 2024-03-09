<script lang="ts" setup>
defineProps<{
    buckets: { info: string, label: string }[] | string[]
    value: string
}>()

defineEmits<{
    (e: "change", modelValue: string): void
}>()

let maxCount = ref(4)
</script>

<template>
<v-radio-group
    :value="value"
    vertical
    @change="$emit('change', $event)"
>
    <v-overflow
        :items="buckets"
        :max-count="maxCount"
        class="flex-col"
    >
        <template #default="{ item: bucket }">
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

                    <v-tooltip
                        v-if="bucket.info"
                        placement="right-start"
                    >
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
    </v-overflow>

    <v-button
        v-if="buckets.length > maxCount"
        type="primary"
        text
        @click="(
            maxCount === buckets.length
                ? maxCount = 4
                : maxCount = buckets.length
        )"
    >
        <v-space size="small">
            <v-text thin>
                Show more
            </v-text>

            <v-text strong>
                ({{ buckets.length - maxCount }})
            </v-text>
        </v-space>
    </v-button>
</v-radio-group>
</template>

<style lang="sass" scoped>
.vxp-radio-group :deep(.vxp-radio__label)
    @apply whitespace-normal
</style>
