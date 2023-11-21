<script lang="ts" setup>
useI18n()
</script>

<template>
<v-row>
    <v-column>
        <entity-order-info />
    </v-column>

    <v-column>
        <entity-order-confirm-order-info />
    </v-column>

    <v-column>
        <entity-order-confirm-order-form />
    </v-column>
</v-row>
</template>
