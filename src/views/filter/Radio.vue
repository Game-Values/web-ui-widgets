<script lang="ts" setup>
import type { Facet } from "~/enums"

defineProps<{
    facet: Facet
    items: string[] // todo (?) mb {<key>:<val>}[]
    value: number | string
}>()

defineEmits<{
    (e: "change", facet: Facet, modelValue: number | string): void
}>()
</script>

<template>
<v-space
    size="large"
    vertical
>
    <v-title
        :level="6"
        class="capitalize"
    >
        {{ facet }}
    </v-title>

    <v-radio-group
        :value="value"
        vertical
        @change="$emit('change', facet, $event)"
    >
        <v-radio
            v-for="item in items"
            :key="item"
            :label="item"
            :value="item"
        />
    </v-radio-group>
</v-space>
</template>
