<script lang="ts" setup>
let isMobileMenuActive = ref(false)
</script>

<template>
<lazy-client-only>
    <v-button
        class="lg:(hidden!)"
        size="small"
        text
        @click="isMobileMenuActive = true"
    >
        <ui-icon
            icon="bars-3"
            size="30"
        />
    </v-button>

    <header-mobile-menu-drawer v-model="isMobileMenuActive" />
</lazy-client-only>
</template>
