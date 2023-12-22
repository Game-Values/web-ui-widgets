<script lang="ts" setup>
import { Facet } from "~/enums"

defineProps<{
    facet: Facet
    items: string[] // todo (?) mb {<key>:<val>}[]
}>()
</script>

<template>
<v-checkbox-group vertical>
    <v-checkbox
        v-for="item in items"
        :key="item"
        :label="item"
        :value="item"
    />
</v-checkbox-group>
</template>
